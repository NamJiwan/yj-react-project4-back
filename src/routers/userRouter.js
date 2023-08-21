import express from "express";
import {
  getLoginSuccess,
  logout,
  postRegisterMember,
  postUsernameSignIn,
} from "../controllers/postRegisterMember.js";

const userRouter = express.Router();

userRouter.post("/register", postRegisterMember);

// 회원가입
userRouter.post("/register", postRegisterMember);
// 로그인
userRouter.post("/signin", postUsernameSignIn);
//로그인확인
userRouter.get("/login/success", getLoginSuccess);
// 로그아웃
userRouter.post("/logout", logout);
export default userRouter;
