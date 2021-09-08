#!/bin/bash 

# Case insenstive match
shopt -s nocaseglob

echo "$DJANGO_SETTINGS_MODULE"

if [ -z "${GUNICORN_WORKERS}" ]; then
    GUNICORN_WORKERS=4
fi

if [ -z "${GUNICORN_PORT}" ]; then
    GUNICORN_PORT=5000
fi

if [ -z "${GUNICORN_TIMEOUT}" ]; then
    GUNICORN_TIMEOUT=120
fi

if [ -z "${DB_HOST}" ]; then
    DB_HOST=canvas_app_explorer_mysql
fi

if [ -z "${DB_PORT}" ]; then
    DB_PORT=3306
fi

# To have a more static default secret key, this should still be defined
if [ -z "${DJANGO_SECRET_KEY}" ]; then
    export DJANGO_SECRET_KEY=`python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'`
    echo "DJANGO_SECRET_KEY not set, using random value"
fi

if [ "${GUNICORN_RELOAD}" ]; then
    GUNICORN_RELOAD="--reload"
else
    GUNICORN_RELOAD=
fi

# To have a more static default secret key, this should still be defined
if [ -z "${DJANGO_SECRET_KEY}" ]; then
    export DJANGO_SECRET_KEY=`python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'`
    echo "DJANGO_SECRET_KEY not set, using random value"
fi

echo "Waiting for DB ${DB_HOST}:${DB_PORT}"
while ! nc -z "${DB_HOST}" "${DB_PORT}"; do   
  sleep 1 # wait 1 second before check again
done

echo Running python startups
python manage.py migrate

echo "Setting domain of default site record"
# The value for LOCALHOST_PORT is set in docker-compose.yml
#if [ "${DOMAIN}" == "localhost" ]; then
#  python manage.py site --domain="${DOMAIN}:${LOCALHOST_PORT}" --name="${DOMAIN}"
#else
#  python manage.py site --domain="${DOMAIN}" --name="${DOMAIN}"
#fi

if [ "${DEBUGPY_ENABLE:-"false"}" == "false" ]; then
    echo "Starting Gunicorn for production"
else
    echo "Starting Gunicorn for DEBUGPY debugging"
    # Workers need to be set to 1 for DEBUGPY
    GUNICORN_WORKERS=1
    GUNICORN_RELOAD="--reload"
    GUNICORN_TIMEOUT=0
fi
exec gunicorn backend.wsgi:application \
    --bind 0.0.0.0:${GUNICORN_PORT} \
    --workers="${GUNICORN_WORKERS}" \
    --timeout="${GUNICORN_TIMEOUT}" \
    ${GUNICORN_RELOAD}
