import cors from "cors";
import express, { Request, Response } from "express";
import morgan from "morgan";
import userRoute from "./routes/user.routes";
//inicia
const app = express();

//config
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.get("/", (req: Request, res: Response) => {
  res.send(`La API esta en el puerto ${app.get("port")}`);
});

app.use(userRoute);

export default app;
