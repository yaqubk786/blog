import express from "express";
import { getPost, getCategory } from "../controllers/controller.js";
const router = express.Router();

// get methods
router.get("/getpost", getPost);

// post methods
router.post("/getcategory", getCategory);

export default router;
