
import Cart from "../models/Cart.js";
import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "./verifyToken.js";


import express from "express";

const router = express.Router();
//CREATE

router.post("/", async (req, res) => {
  //console.log("I TRY 1")  
  const newCart = new Cart(req.body);
  //console.log("I TRY 2")
    try {
      const savedCart = await newCart.save();
      //console.log("I TRY")
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //UPDATE
  router.put("/:id", async (req, res) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      console.log("Güncelledi")
      console.log(updatedCart)
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //DELETE
  router.delete("/:id", async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json("Cart has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET USER CART
  router.get("/find/:userId", async (req, res) => {
    //console.log("geldi")
    try {
      const cart = await Cart.findOne({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // //GET ALL
  
  router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  export default router;