"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Check the README.md file for instructions to the exercise
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filename = "veryhappydog.jpg";
const filepath = path_1.default.join(__dirname, "../dist/images");
const server = http_1.default.createServer((req, res) => {
    const { url, method } = req;
    if (url === "/view-image" && method === "GET") {
        fs_1.default.readFile(`${filepath}/${filename}`, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error reading file");
                return;
            }
            res.writeHead(200, { "Content-Type": "image/jpeg" });
            res.end(data);
        });
        return;
    }
});
const PORT = 3500;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
