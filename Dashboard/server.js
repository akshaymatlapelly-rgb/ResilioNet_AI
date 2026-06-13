const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static(__dirname));

// ESP32 Serial Connection
try {
    const port = new SerialPort({
        path: "COM5", // Change if your COM port is different
        baudRate: 115200
    });

    const parser = port.pipe(
        new ReadlineParser({
            delimiter: "\r\n"
        })
    );

    parser.on("data", (data) => {
        console.log("ESP32:", data);
        io.emit("sensorData", data);
    });

    port.on("error", (err) => {
        console.log("Serial Error:", err.message);
    });

} catch (err) {
    console.log("ESP32 Not Connected");
}

// Socket Connection
io.on("connection", (socket) => {
    console.log("Dashboard Connected");
});

// Home Route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Render Compatible Port
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});