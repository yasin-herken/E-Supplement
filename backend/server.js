import express from 'express';
import dotenv from 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoute from "./routers/auth.js";
import userRoute from "./routers/user.js";
import productRoute from "./routers/product.js";
import orderRoute from "./routers/order.js";
import cartRoute from "./routers/cart.js";
const app = express();

const PORT = process.env.PORT || 5000;

const connection_url =  "mongodb+srv://admin:" + process.env.MONGO_PASSWORD + "@cluster0.mj82ul2.mongodb.net/shop?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log("Error on mongodb connect")
        throw err;
    }
    console.log("Mongoose is connected");
});
app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`)
})