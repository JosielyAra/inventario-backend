import Carrito from "../models/carrito.js";
import Products from "../models/Products.js";

export const getAll = async (req, res) => {
  console.log(req.body);
  const carrito = await Carrito.find().lean();

  return res.json(carrito);
};

export const getCarrito = async (req, res) => {
  try {
    const { userId } = req.body;
    const carrito = await Carrito.find({ userId: userId }).lean();

    const carro = carrito.map(async (el) => {
      return el

    });

    const c = await Promise.all(carro);

    return res.json(c);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCarrito = async (req, res) => {
  try {
    const { _id } = req.body;
    const response = await Carrito.findByIdAndDelete({_id})
    return res.json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const melaniPlus = async (req, res) => {
  const { _id } = req.body
  try {
    const response = await Carrito.findById({ _id });
    let melaniCantidad = response.cantidad + 1;
    const sumaFinal = await Carrito.findByIdAndUpdate({ _id }, { cantidad: melaniCantidad }, { new: true })
    return res.json(sumaFinal)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
export const melaniMinus = async (req, res) => {
  const { _id } = req.body
  try {
    const response = await Carrito.findById({ _id });
    let melaniCantidad = response.cantidad - 1;
    if(melaniCantidad <= 0){
      const response = await Carrito.findByIdAndDelete({_id})
      return res.json(response);
    }
    const restaFinal = await Carrito.findByIdAndUpdate({ _id }, { cantidad: melaniCantidad }, { new: true })
    return res.json(restaFinal)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const addProduct = async (req, res) => {
  try {
    const { userId, product, cantidad } = req.body;

    const response = await Carrito.find({ product: product }).lean()
    const car = response[0]
    if (response.length > 0) {

      let can = car.cantidad + 1

      const respon = await Carrito.findOneAndUpdate({ product: product }, { cantidad: can }, { new: true }).lean()

      return res.status(204).json('Producto ctualizado correctamente')
    }
    const newCarrito = new Carrito({ product, userId, cantidad });
    await newCarrito.save();
    return res.json(newCarrito);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const endCompra = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
