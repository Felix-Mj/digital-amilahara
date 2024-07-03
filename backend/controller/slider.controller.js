import { Slider } from "../Models/slider.models.js";

const getSlider = async (req,res)=>{
    try {
        const response = await Slider.find()
        res.status(200).json({ message: "Slider show successfully",data:response})
    } catch (error) {
        res.status(500).json({ message: "internal server problem",error})   
    }
}

const postSlider = async (req,res)=>{
    try {
        const {title,image,meassage} =req.body;
        const newSlider = new Slider({title,image,meassage});
        await newSlider.save();
        res.status(201).json({ message: "Slider added successfully", data:newSlider });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }

}
 
const deleteSlider = async (req, res) =>{
    try {
        const id = req.params.id
        const response = await Slider.findByIdAndDelete(id)
        res.status(200).json({ message: "Slider deleted successfully",data:response})
    } catch (error) {
        res.status(500).json({ message: "internal server problem",error})   
    }
}

export {getSlider, postSlider, deleteSlider}