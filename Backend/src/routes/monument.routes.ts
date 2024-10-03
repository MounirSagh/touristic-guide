import express from 'express';
import { getMonumentController } from '../controllers/monument.controller';

const monumentrouter = express.Router();

monumentrouter.get('/getmonumentinfo',getMonumentController );

export default monumentrouter;