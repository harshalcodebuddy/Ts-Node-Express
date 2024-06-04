// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 7777;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get('/hello', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.get('/hello/:username', (req: Request, res: Response) => {
  const { username } = req.params;
  if (!username) {
    return res.status(400).send('Username is required');
  }
  res.send(`Hello ${username}`);
});

app.post('/hello', (req: Request, res: Response) => {
  const  {username}  = req.body;
  if (!username) {
    return res.status(400).send('Username is required');
  }
  res.send(`Hello ${username}`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});