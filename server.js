const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const publicFolder = __dirname;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml"
};

const server = http.createServer((req, res) => {
  let requestedPath = decodeURIComponent(req.url.split("?")[0]);
  if (requestedPath === "/") requestedPath = "/index.html";

  const filePath = path.join(publicFolder, requestedPath);

  if (!filePath.startsWith(publicFolder)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("File not found");
    }

    const extension = path.extname(filePath);
    res.writeHead(200, {
      "Content-Type": contentTypes[extension] || "application/octet-stream"
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`OLIVA is running at http://localhost:${PORT}`);
});