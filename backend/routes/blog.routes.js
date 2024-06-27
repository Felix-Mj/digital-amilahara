import express from 'express'
import { postBlog } from '../controller/blog.controller.js'
const blogRoute = express.Router()

blogRoute.post("/blog", postBlog)

export default blogRoute