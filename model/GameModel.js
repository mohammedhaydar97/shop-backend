import mongoose from "mongoose";

const courtSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    surface: {
      type: String,
      required: true,
    },
    hourlyRate: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Court = mongoose.model("Court", courtSchema);

export default Court;
