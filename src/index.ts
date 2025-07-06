import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/api/v1/hello", (req: Request, res: Response, next) => {
  res.send("Imran Shah");
});

app.listen(3000, () => {
  console.log("Server is running on port : " + PORT);
});
