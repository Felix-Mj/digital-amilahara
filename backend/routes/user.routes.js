import express from 'express';
import { login, signup, userUpdate } from '../controller/user.controller.js';
const route =express.Router()

route.post("/signup",signup)
route.post("/login",login)
route.post("/userupdate/:id",userUpdate)

export default route