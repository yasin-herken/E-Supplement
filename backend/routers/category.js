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

    categories = await Categories.find();

   // console.log(categories);
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
