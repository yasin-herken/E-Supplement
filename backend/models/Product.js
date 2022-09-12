import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        shortDesc: { type: String, required: true },
        usage: { type: String, required: true },
        img: { type: String, required: true },
        categories: { type: Array },
        reviews: { type: Array },
        price: { type: Number, required: true },
        inStock: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);