import express from 'express';
import { login, logout, signup, userUpdate } from '../controller/user.controller.js';
const route =express.Router()

route.post("/signup",signup)
route.post("/login",login)
route.post("/userupdate/:id",userUpdate)
route.post("/logout",logout)

export default route