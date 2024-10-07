import { Router } from "express";

import { registerUser,loginUser } from "../controllers/users.controller.js";

const router = Router()

router.route("/SignIn").get(registerUser)
router.route("/LogIn").get(loginUser)

export default router
