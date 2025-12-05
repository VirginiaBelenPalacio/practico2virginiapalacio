import { Router } from "express";

import productsRoute from "./products.route.js";
import rootRoute from "./root.route.js";
import usersRoute from "./users.route.js";

const router = Router();

router.use("/", rootRoute);
router.use("/products", productsRoute);
router.use("/users", usersRoute);

export default router;
