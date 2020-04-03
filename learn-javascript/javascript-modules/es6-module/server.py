import http.server
import socketserver

PORT = 8000

handler = http.server.SimpleHTTPRequestHandler
handler.extensions_map.update({
	".js": "application/javascript",
});

httpd = socketserver.TCPServer(("", PORT), handler)
httpd.serve_forever()