import { Router } from "express";
import { getAllMonedas,createMoneda,getOneMoneda, updateMoneda, deleteMoneda, createMonedaCliente, getMonedaCliente, updateMonedaCliente, deleteMonedaCliente } from "../controllers/monedas.controllers.js";
const router = Router();

router.get("/", getAllMonedas);
router.post("/", createMoneda);
router.get("/:id", getOneMoneda);
router.put("/:id", updateMoneda);
router.delete("/:id", deleteMoneda);



router.post("/create", createMonedaCliente);
router.post("/get/:id", getMonedaCliente);
router.put("/update/:id", updateMonedaCliente);
router.delete("/delete/:id", deleteMonedaCliente);

export default router;
