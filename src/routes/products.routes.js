import { Router } from "express";
import { getProducts,createProducts,updateProducts,deleteProducts,getOneProducts } from "../controllers/products.controllers.js";
const router = Router();

router.post("/get", getProducts);
router.post("/", createProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);
router.get("/:id", getOneProducts);

export default router;
