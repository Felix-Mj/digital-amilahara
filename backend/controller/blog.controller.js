import { Blog } from "../Models/blog.models.js";

const postBlog = async (req, res)=>{
    const {title,description,image,category} = req.body;
    try {
       const blogdata = new Blog({title,description,image, category})
       const response = await blogdata.save()
       res.status(200).json({ message: "BlogPost successfully add",data:response})
    } catch (error) {
        res.status(500).json({ message: "internal server problem",error})   
    }
}

const getBlog = async (req, res)=>{
    try {
        const response = await Blog.find()
        res.status(200).json({ message: "Blog show successfully",data:response})
    } catch (error) {
        res.status(500).json({ message: "internal server problem",error})   
    }
}

export {postBlog, getBlog}