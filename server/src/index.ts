import "dotenv/config";
import express from 'express';
import mongoose from "mongoose";
import cors from "cors";




const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/v1/health', (_req, res) => {
  res.json({ ok: true, db: mongoose.connection.readyState === 1 });
})

async function start() {
  const uri = process.env['MONGODB_URI!'];
  if (!uri) throw new Error('MONGODB_URI is not set');
  await mongoose.connect(uri);
  app.listen(process.env['PORT'] || 4000, () => console.log('API running'));
}
start();