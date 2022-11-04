import { Router } from "express";
import { getFactura,createFactura, updateFactura, deleteFactura, getOneFactura } from "../controllers/factura.controllers.js";
const router = Router();

router.post("/get", getFactura);
router.post("/", createFactura);
router.put("/:id", updateFactura);
router.delete("/:id", deleteFactura);
router.get("/:id", getOneFactura);

export default router;
