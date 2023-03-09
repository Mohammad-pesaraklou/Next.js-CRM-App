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
  if (req.method === "PATCH") {
    const { customerInputs } = req.body;
    console.log(customerInputs);
    try {
      const customerData = await Customer.findOne({ _id: customerId });
      console.log(customerData);
      customerData.name = customerInputs.name;
      customerData.lastName = customerInputs.lastName;
      customerData.email = customerInputs.email;
      customerData.address = customerInputs.address;
      customerData.postalCode = customerInputs.postalCode;
      customerData.date = customerInputs.date;
      customerData.products = customerInputs.products;
      console.log(customerData);
      customerData.save();
      res.status(201).json({
        status: "successful",
        data: customerData,
      });
    } catch (err) {
      res
        .status(422)
        .json({ status: "failed", message: "error in editing data in db" });
      return;
    }
  }
}
