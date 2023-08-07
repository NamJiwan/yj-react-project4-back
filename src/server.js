import "dotenv/config"
import "./db.js";
import express from "express"
import morgan from "morgan";
import rentalRouter from "./routers/rentalRouter.js";
import cors from "cors";
import foodsRouter from "./routers/foodsRouter.js";
import userRouter from "./routers/userRouter.js";

const PORT = 8080;
const app = express()
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://unrivaled-kataifi-3a60c8.netlify.app"
  ],
  methode: ["GET", "POST"],
  credentials:true,
}

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
// json형태로 만들어줌

app.use(express.urlencoded({ extended: true }));

app.use("/api/rental", rentalRouter)
app.use("/api/foods", foodsRouter)
app.use("/api/user", userRouter)

// app.get('/test', function (req, res) {
//   res.json({"ok":"안녕하세요"});
  
// })
//테스트용

const handleListening = () => console.log(`❤👍server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);