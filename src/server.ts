// Check the README.md file for instructions to the exercise
import http from 'http'
import fs from 'fs'
import path from 'path'

const filename = "veryhappydog.jpg"
const filepath = path.join(__dirname, "../dist/images")

const server = http.createServer((req, res) => {
    const { url, method } = req

    if (url === "/view-image" && method === "GET") {
        fs.readFile(`${filepath}/${filename}`, (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"})
                res.end("Error reading file")
                return
            }
            res.writeHead(200, {"Content-Type": "image/jpeg"})
            res.end(data)
        })
        return
    }
})

const PORT = 3500
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})