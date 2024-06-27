import { Cashfree } from "cashfree-pg";
import dotenv from "dotenv";
import { userPayment } from "../Models/payment.models.js";
dotenv.config();

Cashfree.XClientId = process.env.CASHFREE_APP_ID;
Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;

export const generatePaymentLink = async (req, res) => {
  const { notify } = req.body;
  try {
    //   const {
    //     orderId,
    //     orderAmount,
    //     customerEmail,
    //     customerPhone,
    //     orderCurrency,
    //     customerName,
    //  } = req.body;
    //   console.log("🚀 ~ generatePaymentLink: ~ Id:", orderId);

    // Calculate expiry time (10 minutes from now)
    const linkExpiry = new Date(Date.now() + 10 * 60000).toISOString(); // 10 minutes * 60000 milliseconds

    const request = {
      link_amount: 111,
      link_currency: "INR",
      link_id: "mi11389",
      link_partial_payments: false,
      customer_details: {
        customer_name: "Chandan",
        customer_phone: "9438348400",
        customer_email: "code.tm@gmail.com",
      },
      link_expiry_time: linkExpiry,
      link_purpose: `Payment for donation`,
      link_notify: {
        send_sms: false,
        send_email: false,
      },
      link_auto_reminders: false,
      link_meta: {
        notify_url: notify,
        upi_intent: false,
        return_url: "exp://192.168.31.210:8081/transactions",
      },
    };
    // console.log("🚀 ~ generatePaymentLink: ~ request:", request);

    Cashfree.PGCreateLink("2023-08-01", request)
      .then((response) => {
        return res.status(200).json({
          status: true,
          message: "Link Generated successfully",
          url: response.data?.link_url,
        });
      })
      .catch((error) => {
        console.log("🚀 ~ generatePaymentLink: ~ error:", error);
        return res.status(200).json({
          status: false,
          message: "Failed to generate Link",
          error,
        });
      });
  } catch (error) {
    res.status(500).json({ message: "Internal server problem", error: error });
  }
};

export const PaymentSuccess = async (req, res) => {
  try {
    const { data } = req.body;
  
    const savePayment = new userPayment({
      name: data.customer_details.customer_name,
      amount: data.payment.payment_amount,
      email: data.customer_details.customer_email,
      phone: data.customer_details.customer_phone,
      orderId: data.payment.payment_status,
    });
    await savePayment.save();
    if (!savePayment) {
      console.log("payment not save")
    }
    console.log("🚀 ~ PaymentSuccess: ~ data:", data);
  
    // console.log("Amount: ",resp.link_amount)
    // console.log("customer Name: ", resp.customer_details.customer_name)
    // console.log("Tranjaction id: ", resp.order.transaction_id)
    res.status(200).json({Success: true,message: "Payment Successfull",});
  } catch (error) {
    console.log(error)
  }
};
