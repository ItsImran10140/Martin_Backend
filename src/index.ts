import express, { Request, Response } from "express";
import { getRequest, router } from "../routes/route";

const app = express();
const PORT = 3000;

app.get("/api/v1/hello", (req: Request, res: Response, next) => {
  getRequest(req, res, next);
});

app.listen(3000, () => {
  console.log("Server is running on port : " + PORT);
});
