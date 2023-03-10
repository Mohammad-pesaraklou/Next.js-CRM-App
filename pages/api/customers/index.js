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
  if (req.method === "GET") {
    try {
      const customerData = await Customer.find();
      res.status(200).json({ status: "successful", data: customerData });
    } catch (err) {
      res
        .status(500)
        .json({ status: "failed", message: "failed to get data from DB" });
      return;
    }
  }

  if (req.method === "POST") {
    const data = req.body.customerInputs;
    if (!data.name || !data.email || !data.lastName) {
      res.status(422).json({ status: "failure", message: "invalid Data" });
    }

    try {
      const customerData = await Customer.create(data);
      res.status(201).json({ status: "successful", data: customerData });
    } catch (err) {
      res
        .status(422)
        .json({ status: "failed", message: "failed to store data in DB" });
      return;
    }
  }
}
