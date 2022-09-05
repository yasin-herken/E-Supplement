import express from "express";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from 'dotenv/config';
const router = express.Router()

/*router.post("/register",async (req,res)=>{
    User.findOne({username:req.body.username}, async (err,data)=>{
        if(err) throw err;
        if(data){
            res.send({
                success: false,
                message: "User is already exists"
            });
        }else{
            const user = new User({
                username: req.body.username,
                password: bcrypt.hashSync(req.body.password,parseInt(process.env.PASSWORD_HASH)),
                email: req.body.email,
                role: "Admin"
            });
            user.save().then((user)=>{
                res.send({

                        success: true,
                        message: "User created successfully",
                        user: {
                            id: user._id,
                            username: user.username,
                            email: user.email,
                            role: user.role
                        }
                });
            }).catch(err=>{
                res.send({
                    success : false,
                    message: "Something went wrong",
                    error: err
                });
            });
        }
    });
});*/

router.post("/login", async (req,res)=>{
    User.findOne({ username: req.body.username }).then(user => {
        //No user found
        
        if (!user) {
            console.log("NO USER");
            return res.status(401).send({
                success: false,
                message: "Could not find the user"
            })
            
        }

        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).send({
                success: false,
                message: "Incorrect password"
            })
        }

        const payload = {
            username: user.username,
            role: user.role,
            id: user._id
        }
        
        const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1h" })
        return res.status(200).send({
            success: true,
            message: "Logged in successfully",
            token: "Bearer " + token,
            user : user,
            role: user.role
        })
    })
});

export default router;