import express from "express";
import path from "path";
import handlebars from "express-handlebars";
import routes from "./routes/index.js";

const app = express();
const __dirname = path.resolve();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Archivos estáticos
app.use(express.static(__dirname + "/public"));

// Configuración de Handlebars
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

// Rutas
app.use("/", routes);

// Servidor
app.listen(8080, () => {
    console.log("Servidor corriendo en http://localhost:8080");
});
