import Factura from "../models/factura.js";
import Carrito from '../models/carrito.js'
import Products from '../models/Products.js'

export const getFactura = async (req, res) => {
  try {
    const { id } = req.body;
    const factura = await Factura.find({ userId: id });
    res.send(factura);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createFactura = async (req, res) => {
  try {
    const { userId, products, total, cliente, typeFac } = req.body;
    if(typeFac === 'Venta'){
      const hello = products.map(async (i) => await Products.findByIdAndUpdate(i.product._id,{stock: i.product.stock - i.cantidad},{new:true}))
      await Promise.all(hello);
    }else{
      const hello = products.map(async (i) => await Products.findByIdAndUpdate(i.product._id,{stock: i.product.stock + i.cantidad},{new:true}))
    await Promise.all(hello);
    }
    const newFactura = new Factura({ userId, products, total, cliente, typeFac });
    await newFactura.save();
    await Carrito.deleteMany({ userId: userId }).lean();

    return res.json("newFactura");
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message });
  }
};

export const updateFactura = async (req, res) => {
  try {
    console.log(req.params.id, req.body)
    // const factura = await Factura.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    // });
    return res.json('factura');
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteFactura = async (req, res) => {
  try {

    const factura = await Factura.findByIdAndDelete(req.params.id);
    if (!factura) {
      return res.sendStatus(404);
    }
    return res.json('deleted')
    // return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOneFactura = async (req, res) => {
  try {
    console.log(req.params.id)
    // const factura = await Factura.findById(req.params.id);
    // if (!factura) {
    //   return res.sendStatus(404);
    // }
    return res.json('factura');
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
