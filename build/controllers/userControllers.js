import User from "../models/user.js";
import { async } from "./rentalControllers.js";

// 회원가입 컨트롤러
export const postRegisterMember = async (req, res) => {
  try {
    const { username, password, email, name, mobile, address2 } = req.body;
    const address = address2;
    const user = await User.create({
      username,
      password,
      name,
      email,
      mobile,
      address,
      createdAt: Date.now(),
    });
    res.json({ ok: "true", user });
  } catch (error) {
    console.log(error);
  }
};

// 로그인 컨트롤러
export const postUsernameSignIn = async (req, res) => {
  const {username, password} = req.body;
  //에러처리
  if(username === "" || password === ""){
    res.json({ok:"false", message:"아이디와 패스워드는 반드시 입력해야 합니다."})
  }

  //아이디 확인
  const user = await User.findOne({username});
  console.log(user);
};
