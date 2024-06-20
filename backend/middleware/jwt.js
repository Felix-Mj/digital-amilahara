import jwt from "jsonwebtoken";

const veryfiyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthrization",
    });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    res.status(408).json({ error: "invelid token" });
  }
};

const genToken = (userData) => {
  return jwt.sign({ userData }, process.env.JWT_SECRET);
};


export { veryfiyToken, genToken };