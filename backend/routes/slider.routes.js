import express from 'express'
import { deleteSlider, getSlider, postSlider } from '../controller/slider.controller.js';

const sliderRoute = express.Router();

sliderRoute.get("/slider", getSlider);
sliderRoute.post("/slider", postSlider);
sliderRoute.delete("/slider/:id", deleteSlider);

export default sliderRoute;