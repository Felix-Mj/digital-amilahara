import express from 'express'
import { PaymentSuccess, generatePaymentLink } from '../controller/payment.controller.js'
const paymentRoute =express.Router()

paymentRoute.post("/payment",generatePaymentLink)
paymentRoute.post("/paymentconfrom",PaymentSuccess)

export default paymentRoute