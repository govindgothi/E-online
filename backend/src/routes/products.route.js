import { Router } from "express";
import { ListingProduct } from "../controllers/product.controller.js";

const router = Router()

router.route("/listing").get(ListingProduct)

export default router