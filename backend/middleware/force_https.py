# middleware.py
from django.conf import settings

class ForceHttpsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if getattr(settings, "SESSION_COOKIE_SECURE", False):
            request.is_secure_orig = request.is_secure
            request.is_secure = lambda: True
        return self.get_response(request)
