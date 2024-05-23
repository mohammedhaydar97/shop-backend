import mongoose from "mongoose";

const adSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ad = mongoose.model("Ad", adSchema);

export default Ad;
