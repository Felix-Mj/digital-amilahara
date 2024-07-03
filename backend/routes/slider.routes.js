import express from 'express'
import { getSlider, postSlider } from '../controller/slider.controller.js';

const sliderRoute = express.Router();

sliderRoute.get("/slider", getSlider);
sliderRoute.post("/slider", postSlider);

export default sliderRoute;