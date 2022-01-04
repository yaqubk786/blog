import express from 'express';
import { getPost } from '../controllers/controller.js';
const router = express.Router();



router.get("/getpost",  getPost );



export default router;