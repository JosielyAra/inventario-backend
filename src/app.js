import express from "express";
import productsRoutes from "./routes/products.routes.js";
import carritoRoutes from './routes/carrito.routes.js'
import facturaRoutes from './routes/factura.routes.js'
import clientsRoute from './routes/clients.routes.js'
import monedasRoutes from './routes/monedas.routes.js'
import cors from "cors";
import morgan from 'morgan'

const app = express();

//midleware
app.use(morgan(':method :url :status :response-time ms'))
app.use(express.json());
app.use(cors());

//routes
app.use("/api/products", productsRoutes);
app.use("/api/carrito", carritoRoutes);
app.use("/api/factura", facturaRoutes);
app.use("/api/client", clientsRoute);
app.use("/api/monedas", monedasRoutes);

export default app;
