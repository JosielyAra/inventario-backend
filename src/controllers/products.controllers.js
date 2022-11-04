import Products from "../models/Products.js";

export const getProducts = async (req, res) => {
  try {
    const {id} = req.body;
    const products = await Products.find({userId:id}).sort({name:"ascending"});
    res.send(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProducts = async (req, res) => {
  try {
    const { name, description, price, userId, price2, stock } = req.body;
    const newProduct = new Products({ name, description, price, userId, price2, stock });
    await newProduct.save();
    return res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProducts = async (req, res) => {
  try {
    const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.sendStatus(404);
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOneProducts = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.sendStatus(404);
    }
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
