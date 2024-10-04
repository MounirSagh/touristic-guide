import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/router';

dotenv.config();

const app = express();

app.use('/api', router);
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});