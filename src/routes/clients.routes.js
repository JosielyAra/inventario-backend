import { Router } from "express";
import { getClient,createClient,updateClient,deleteClient,getOneClient } from "../controllers/clients.controllers.js";
const router = Router();

router.post("/get", getClient);
router.post("/", createClient);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);
router.get("/:id", getOneClient);

export default router;
