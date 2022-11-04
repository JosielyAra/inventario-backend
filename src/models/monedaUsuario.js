import mongoose from "mongoose";

const monedaUsuarioSchema = new mongoose.Schema({
  userId:{
    type:String
  },
moneda:{
  type:Object
},
});

export default mongoose.model("MonedaUsuario", monedaUsuarioSchema);
