import mongoose from "mongoose";

const monedasSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  simbolo: {
    type: String,
    require: true,
  },
  valor: {
    type: Number,
    require: true,
  }
});

export default mongoose.model("Moneda", monedasSchema);
