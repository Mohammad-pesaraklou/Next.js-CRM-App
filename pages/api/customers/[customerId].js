import Customer from "@/models/Customer";
import ConnectDB from "@/utils/ConnectDB";

export default async function handler(req, res) {
  const { customerId } = req.query;

  try {
    await ConnectDB();
  } catch (err) {
    res
      .status(500)
      .json({ status: "failed", message: "failed to connect to DB" });
    return;
  }
  if (req.method === "DELETE") {
    try {
      await Customer.findByIdAndDelete(customerId);
      res.status(201).json({
        status: "successful",
        message: "customer successfully deleted from db",
      });
    } catch (err) {
      res
        .status(422)
        .json({ status: "failed", message: "error in deleting data from db" });
      return;
    }
  } else if (req.method === "GET") {
    try {
      const customerData = await Customer.findOne({ _id: customerId });
      res.status(201).json({
        status: "successful",
        data: customerData,
      });
    } catch (err) {
      res
        .status(422)
        .json({ status: "failed", message: "error in get data from db" });
      return;
    }
  }
}
