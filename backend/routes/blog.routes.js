import express from 'express'
import { getBlog, postBlog, getBlogById, deleteblog } from '../controller/blog.controller.js'
const blogRoute = express.Router()

blogRoute.post("/blog", postBlog)
blogRoute.get("/bloglist", getBlog)
blogRoute.get("/bloglist/:id", getBlogById)
blogRoute.delete("/bloglist/delete/:id", deleteblog)

export default blogRoute