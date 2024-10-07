import mongoose from "mongoose"
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
    path: './.env'
})

main().then(
    app.listen(process.env.PORT || 3000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`)
}))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/User');
     console.log("mongodb is connected")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
