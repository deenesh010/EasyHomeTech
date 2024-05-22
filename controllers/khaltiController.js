import axios from "axios";
import orderModel from "../models/orderModel.js";

export const khalti = async (req, res) => {
  const payload = req.body;
  const khaltiResponse = await axios.post(
    "https://a.khalti.com/api/v2/epayment/initiate/",
    payload,
    {
      headers: {
        Authorization: `key ${process.env.KHALTI_SECRET_KEY}`,
      },
    }
  );
  if (khaltiResponse) {
    const order = await new orderModel({
      buyer: req.user._id,
      products:payload.products
    }).save();
    // console.log(order);
    res.json({ sucess: true, data: khaltiResponse?.data });
  } else {
    res.json({ sucess: false, message: "something went wrong" });
  }
};
