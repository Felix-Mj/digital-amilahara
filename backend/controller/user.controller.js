import bcript, { hash } from "bcrypt";
import { User } from "../Models/user.models.js";
import { genToken } from "../middleware/jwt.js";
import { Contectus } from "../Models/contect.models.js";

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
    const paylod = {
      id: user._id,
    }
    const token = genToken(paylod)
    res.cookie("access_token", token, { httpOnly: true }).status(200).json({ success: true, message: "User created successfully", user: user ,token:token });

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
  try {
    if (req.body.password) {
      req.body.password = await bcript.hash(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(id,
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res
      .status(200)
      .json({ success: true, message: "User updated", data: rest });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server issue" });
}
}

const logout = (req, res) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json({ success: true, message: "Logout successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server issue" });
  }
};

const postContectus = async (req, res)=>{
  try {
    const { name, email, subject, message } = req.body;
    const newContectus = new Contectus({ name, email, subject, message });
    await newContectus.save();
    res.status(201).json({ message: "message send successfully", data: newContectus });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}
const getContectus = async (req,res) =>{
  try {
    const response = await Contectus.find()
    res.status(200).json({ message: "Contectus show successfully",data:response})
  } catch (error) {
    res.status(500).json({ message: "internal server problem",error})
  }
}

export { signup, login, userUpdate, logout, getContectus ,postContectus};
