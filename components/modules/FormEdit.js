import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
// components
import Form from "./Form";
// styles
import styles from "../../pages/addCustomer/index.module.scss";
import { useRouter } from "next/router";
import moment from "moment/moment";

const FormEdit = ({ data, id }) => {
  const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";
  const router = useRouter();
  const [customerInputs, setCustomersInput] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    address: data.address || "",
    postalCode: data.postalCode || "",
    date: date,
    products: data.products || [],
    updatedAt: Date.now(),
  });
  const { products } = customerInputs;
  const editHandler = async () => {
    const req = await axios.patch(`/api/edit/${id}`, { customerInputs });
    setCustomersInput({
      name: "",
      lastName: "",
      email: "",
      address: "",
      postalCode: "",
      date: "",
    });
    if (req.data.status === "successful") return router.push("/customers");
  };
  const cancelHandler = () => {
    setCustomersInput({
      name: "",
      lastName: "",
      email: "",
      address: "",
      postalCode: "",
      date: "",
      products: [],
    });
  };

  const addItem = () => {
    setCustomersInput({
      ...customerInputs,
      products: [...products, { name: "", qty: "", price: "" }],
    });
  };

  return (
    <div className={styles.container}>
      <Form
        customerInputs={customerInputs}
        setCustomersInput={setCustomersInput}
      />
      <div className={styles.btnContainer}>
        <Button variant="contained" color="secondary" onClick={cancelHandler}>
          Cancel
        </Button>
        <Button sx={{ maxWidth: "200px" }} variant="outlined" onClick={addItem}>
          Add Item
        </Button>
        <Button variant="contained" color="primary" onClick={editHandler}>
          Edit
        </Button>
      </div>
    </div>
  );
};

export default FormEdit;
