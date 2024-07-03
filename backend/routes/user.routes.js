import express from 'express';
import { getContectus, login, logout, postContectus, signup, userUpdate } from '../controller/user.controller.js';
const route =express.Router()

route.post("/signup",signup)
route.post("/login",login)
route.post("/userupdate/:id",userUpdate)
route.get("/logout",logout)
route.post("/contectus",postContectus)
route.get("/contectus",getContectus)

export default route