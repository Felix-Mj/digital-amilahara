import express from 'express'
import { getBlog, postBlog, getBlogById } from '../controller/blog.controller.js'
const blogRoute = express.Router()

blogRoute.post("/blog", postBlog)
blogRoute.get("/bloglist", getBlog)
blogRoute.get("/bloglist/:id", getBlogById)

export default blogRoute