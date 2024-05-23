import mongoose from "mongoose";

const champSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    desc: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

const Champ = mongoose.model("Champ", champSchema);

export default Champ;
