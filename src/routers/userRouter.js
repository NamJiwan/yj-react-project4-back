import express from "express";
import { getLoginSuccess, postRegisterMember, postUsernameSignIn } from "../controllers/postRegisterMember.js";

const userRouter = express.Router()

userRouter.post("/register",postRegisterMember);

// 회원가입
userRouter.post("/register", postRegisterMember);
// 로그인
userRouter.post("/signin", postUsernameSignIn);
//로그인확인
userRouter.get("/login/success", getLoginSuccess);

export default userRouter;