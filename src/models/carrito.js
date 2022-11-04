import mongoose from "mongoose";

const carritoSchema = new mongoose.Schema({
  product:{
    type:Object
  },
 
  userId: {
    type: String,
  },
  cantidad:{
    type:Number,
    default: 1
  }
});

export default mongoose.model("Carrito", carritoSchema);
