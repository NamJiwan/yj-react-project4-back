import express from "express";
import { postRegisterMember  } from "../controllers/postRegisterMember.js";
import { postUsernameSignIn } from "../controllers/userControllers.js";

const userRouter = express.Router()

userRouter.post("/register",postRegisterMember)

// 회원가입
userRouter.post("/register", postRegisterMember);
// 로그인
userRouter.post("/signin", postUsernameSignIn);

export default userRouter;