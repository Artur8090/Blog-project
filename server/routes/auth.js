import { Router } from "express";
import User from '../models/User.js';
import {register, login, getMe} from "../controllers/auth.js";
import { checkAuth } from "../utils/checkAuth.js";
const router = Router();


// Registration
// http://localhost:3000/api/auth/register
router.post("/register", register);

// Login
// http://localhost:3000/api/auth/login
router.post("/login", login);
// Get me
// http://localhost:3000/api/auth/me
router.get("/me", checkAuth, getMe);
export default router;