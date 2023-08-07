import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    name:String,
    mobile:String,
    email:String,
    address:String,
    createdAt:Date,
});

//데이터베이스에 저장하기전에 패스워드 암호화
userSchema.pre("save",async function(){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 5);
    }
})

const User = mongoose.model("User", userSchema);
export default User;