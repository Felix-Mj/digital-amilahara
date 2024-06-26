import express from 'express'
import { generatePaymentLink } from '../controller/payment.controller.js'
const paymentRoute =express.Router()

paymentRoute.post("/payment",generatePaymentLink)

export default paymentRoute