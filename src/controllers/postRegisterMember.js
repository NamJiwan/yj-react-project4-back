import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const postRegisterMember = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password, email, name, mobile, address2 } = req.body;
    const address = address2;
    const user = await User.create({
      username,
      password,
      email,
      mobile,
      address,
      name,
      createdAt: Date.now(),
    });
    res.json({ ok: "true", user });
  } catch (error) {
    console.log(error);
  }
};

// 로그인 컨트롤러
export const postUsernameSignIn = async (req, res) => {
  const { username, password } = req.body;
  //에러처리
  if (username === "" || password === "") {
    res.json({
      ok: "false",
      message: "아이디와 패스워드는 반드시 입력해야 합니다.",
    });
  }

  //아이디 확인
  // 데이터베이스에 User 정보 찾음
  const user = await User.findOne({ username });
  // console.log(user);
  if (!user) {
    return res.status(401).json({ ok: "false", message: "해당없음" });
  }
  // 비밀번호 확인
  const ok = await bcrypt.compare(password, user.password);
  // console.log(ok);
  if (!ok) {
    return res
      .status(401)
      .json({ ok: "false", message: "아이디/패스워드가 다릅니다." });
  }

  //쿠키전송
  try {
    const accessToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.ACCESS_SECRET
    );
    res.cookie("accessToken", accessToken, {
      secure: true,
      httpOnly: false,
      sameSite: "None",
    });
    res.status(200).json({ ok: "true" });
  } catch (error) {
    console.log(error);
  }
};

//로그인성공시
export const getLoginSuccess = async (req, res) => {
  try {
    const token = req.cookies?.accessToken;
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    // console.log(data);
    const userData = await User.findOne({ _id: data.id });
    // console.log(userData);
    res
      .status(200)
      .json({ ok: "true", email: userData.email, username: userData.username });
  } catch (error) {
    console.log(error);
  }
};

// 로그아웃
export const logout = async (req, res) => {
  try {
    res.cookie("accessToken", " ", {
      secure: true,
      httpOnly: false,
      sameSite: "None",
    });
    res.status(200).json({ ok: "true", message: "로그아웃 성공" });
  } catch (error) {
    console.log(error);
  }
};
