import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
});

export const foodList =
  mongoose.models.food || mongoose.model("food", foodSchema);
