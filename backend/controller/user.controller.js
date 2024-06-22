import bcript from "bcrypt";
import { User } from "../Models/user.models.js";
import { genToken } from "../middleware/jwt.js";

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;    
    if (!name) {
      return res.status(400).json({ success: false, message: "Required Name" });
    }
    if (!email) {
      return res.status(400).json({ success: false, message: "Required Email" });
    }
    if (!password) {
      return res.status(400).json({ success: false, message: "Required Password" });
    }
    const hash = await bcript.hash(password, 10);
    const user = new User({ name, email, password: hash });
    await user.save();
    res.status(201).json({ success: true, message: "User created successfully", user: user });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Internal server problem",error });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: "Required Email" });
    }
    if (!password) {
      return res.status(400).json({ success: false, message: "Required Password" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    const match = await bcript.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ success: false, message: "Invalid Password" });
    }
    const paylod = {
      id: user._id,
    }
    const token = genToken(paylod)
    res.cookie("access_token", token, { httpOnly: true }).status(200).json({ success: true, message: "Logged in successfully", user: user ,token:token });

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Internal server problem",error:error });

  }

};

const userUpdate = async(req, res)=>{
  const id = req.params.id;
  const { name, email, password ,number } = req.body;
  try {
    const hash = await bcript.hash(password, 10)
    const data = await User.findByIdAndUpdate(id, {name,email,password:hash,number})
    res.status(201).json({ success: true, message: "User updated successfully", data: data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server problem",error:error });
  }
}


export { signup, login, userUpdate };
