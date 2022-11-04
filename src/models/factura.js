import mongoose from "mongoose";

const facturaSchema = new mongoose.Schema({
  userId:{
    type:String
  },
  products:{
    type:Array
  },
  total: {
    type: Number,

  },
  cliente: {
    type: String,
  },
  typeFac:{
    type:String
  }
});

export default mongoose.model("Factura", facturaSchema);
