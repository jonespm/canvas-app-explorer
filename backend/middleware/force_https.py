# middleware.py
class ForceHttpsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Monkey-patch the request method
        request.is_secure_orig = request.is_secure
        request.is_secure = lambda: True
        response = self.get_response(request)
        return response
