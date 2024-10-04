import express from 'express';
import { getMonumentController, getSuggestionsController } from '../controllers/monument.controller';

const monumentrouter = express.Router();

monumentrouter.get('/getmonumentinfo', getMonumentController); 
monumentrouter.get('/getsuggestions', getSuggestionsController); 

export default monumentrouter;