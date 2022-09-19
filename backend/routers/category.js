import Categories from "../models/Categories.js";

import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "./verifyToken.js";

import express from "express";
const router = express.Router();

//GET ALL CATEGORIES
router.get("/all", async (req, res) => {
  try {
    let categories;

    categories = await Categories.find({});

    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/addCategory",async (req, res) => {
  try {
    const {category } = req.body;

    const categoryExist = await Categories.findOne({ category });
    if (categoryExist)
      return res.status(400).json({ message: "Category already exists." });

    const createdCategory = await Categories.create({
      category: req.body.category
    });

    return res.status(201).json({ data: createdCategory, message: "you are successfully added" });
  } catch (error) {
    console.log(error);
    return res.json({ message: "create category failed" });
  }
});

export default router;
