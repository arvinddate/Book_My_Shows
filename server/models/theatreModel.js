import mongoose,{ model }  from "mongoose";
const theatreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
},{
    timestamps:true 
})

const Theatre = model("theatres", theatreSchema);
export default Theatre;