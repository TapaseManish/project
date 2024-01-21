import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    image:String,
    dateOfSale:String,
    month:String,
    sold: {
      type: Boolean,
      required: true,
    },
    dateOfSale: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("product", productSchema);
