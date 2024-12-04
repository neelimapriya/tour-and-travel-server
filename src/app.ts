import express, { NextFunction, Request, Response } from "express";
import userRouter from "./app/module/user/user.route";
const app = express();

app.use(express.json());

app.use("/api/user", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("tour and travel server is running 🔥");
});

app.use((error:any, req: Request, res: Response, next:NextFunction) => {
  console.log(error, "err app");
  res
    .status(500)
    .json({ success: false, message: error.message, error: error });
});

export default app;
