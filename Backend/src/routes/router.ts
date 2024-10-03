import express from 'express';
import monumentrouter from './monument.routes';


const router = express.Router();

router.use("/monument", monumentrouter)



export default router