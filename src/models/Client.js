import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  userId:{
    type:String
  },
  name: {
    type: String,
    require: true,
  },
  ci: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  }
});

export default mongoose.model("Client", clientSchema);
