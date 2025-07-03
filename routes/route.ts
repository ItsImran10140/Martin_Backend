import { Router } from "express";

export const router = Router();

export const getRequest = router.get("/hello", (req, res) => {
  res.json({ message: "Hello From the Server." });
});

export default { getRequest };
