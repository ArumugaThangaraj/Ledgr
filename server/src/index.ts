import "dotenv/config";
import express from 'express';
import mongoose from "mongoose";
import cors from "cors";

 


const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/v1/health',(_req,res)=>{
    res.json({ ok: true, db: mongoose.connection.readyState === 1 });
})

async function start() {
  const mongo = await mongoose.connect(process.env['MONGODB_URI!'] || 'mongodb://localhost:27017/ledgr');
  if (!mongo) {
    console.error('MongoDB connection failed');
    process.exit(1);
  }

  app.listen(process.env['PORT'] || 4000, () => console.log('API running'));
}
start();