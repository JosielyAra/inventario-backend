import { Router } from "express";
const router = Router();
import {addProduct, getCarrito, deleteCarrito, getAll, melaniMinus, melaniPlus} from '../controllers/carrito.controllers.js'

router.post("/all", getAll);

router.post("/get", getCarrito);

router.post("/", addProduct);

router.post("/delete", deleteCarrito);

router.post("/minus", melaniMinus)

router.post("/plus", melaniPlus)


export default router;