import Customer from "@/models/Customer";
import ConnectDB from "@/utils/ConnectDB";

export default async function handler(req, res) {
  try {
    await ConnectDB();
  } catch (err) {
    res
      .status(500)
      .json({ status: "failed", message: "failed to connect to DB" });
    return;
  }
  const { customerId } = req.query;
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
  }
}
