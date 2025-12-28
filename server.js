import express from "express";
import path from "path";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import http from "http";
import routes from "./routes/index.js";

const app = express();

// 🔹 Servidor HTTP para Socket.io
const server = http.createServer(app);
const io = new Server(server);

// 🔹 Path absoluto correcto
const __dirname = path.resolve();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Archivos estáticos
app.use(express.static(path.join(__dirname, "src/public")));

// Handlebars
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "src/views"));

// Rutas
app.use("/", routes);

// 🔹 WebSocket
let products = [];

io.on("connection", socket => {
    console.log("Cliente conectado");

    socket.emit("products", products);

    socket.on("newProduct", product => {
        products.push(product);
        io.emit("products", products);
    });
});

// Servidor
server.listen(8080, () => {
    console.log("Servidor corriendo en http://localhost:8080");
});
