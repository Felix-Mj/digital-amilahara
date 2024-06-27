import express from 'express'
import { getBlog, postBlog } from '../controller/blog.controller.js'
const blogRoute = express.Router()

blogRoute.post("/blog", postBlog)
blogRoute.get("/bloglist", getBlog)

export default blogRoute