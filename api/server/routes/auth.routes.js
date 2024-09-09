import { addMovie, getMovies, getUser, SignIn, SignUp } from "../controllers/auth.controller.js";
import express from "express";
const router=express.Router();
router.post("/signUp",SignUp);
router.post("/signIn",SignIn);
router.get("/getUser",getUser);
router.get("/movies",getMovies);
router.post("/addmovies",addMovie);
export default router;