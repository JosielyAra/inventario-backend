import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  price2: {
    type: Number,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
  userId: {
    type: String,
  },
});

export default mongoose.model("Product", productSchema);
