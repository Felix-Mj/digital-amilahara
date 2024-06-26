import {Cashfree} from 'cashfree-pg'
import dotenv from 'dotenv'
dotenv.config()

Cashfree.XClientId = process.env.CASHFREE_APP_ID;
Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
 
export const generatePaymentLink = async (req, res) => {
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
      link_amount: 500,
      link_currency: "INR",
      link_id: "111",
      link_partial_payments: false,
      customer_details: {
        customer_name: "CHandan",
        customer_phone: "94383484",
        customer_email: "code.us.cm@gmail.com",
        //   customer_id: bookingId,
      },
      link_expiry_time: linkExpiry,
      link_purpose: `Payment for ${bookingId}`,
      link_notify: {
        send_sms: false,
        send_email: false,
      },
      link_auto_reminders: false,
      link_meta: {
        notify_url:
          "https://api.vertexautosolution.com/v1/app/payment-confirmation",
        upi_intent: false,
        // return_url: "exp://192.168.31.210:8081/transactions",
      },
    };
    console.log("🚀 ~ generatePaymentLink: ~ request:", request);

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
    res.status(500).json({ message: "Internal server problem", error });
  }
};