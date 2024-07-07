import express from 'express'
import { PaymentSuccess, generatePaymentLink, paymentHistory } from '../controller/payment.controller.js'
const paymentRoute =express.Router()

paymentRoute.post("/payment",generatePaymentLink)
paymentRoute.get("/payment/:id",paymentHistory)
paymentRoute.post("/paymentconfrom",PaymentSuccess)

export default paymentRoute