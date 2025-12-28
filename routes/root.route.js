import { Router } from "express";

const router = Router();

// Simulación de productos (después pueden venir de archivo o DB)
let products = [
    { title: "Producto 1", price: 100 },
    { title: "Producto 2", price: 200 }
];

// HOME → Handlebars dinámico
router.get("/", (req, res) => {
    res.render("home", {
        products
    });
});

// REAL TIME PRODUCTS → WebSocket
router.get("/realtimeproducts", (req, res) => {
    res.render("realTimeProducts");
});

export default router;
