import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
// components
import Form from "./Form";
// styles
import styles from "../../pages/addCustomer/index.module.scss";
import { useRouter } from "next/router";

const FormEdit = ({ data, id }) => {
  const router = useRouter();
  const [customerInputs, setCustomersInput] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    address: data.address || "",
    postalCode: data.postalCode || "",
    date: data.date || "",
    products: data.products || [],
  });
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
  console.log(id);
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

        <Button variant="contained" color="primary" onClick={editHandler}>
          Edit
        </Button>
      </div>
    </div>
  );
};

export default FormEdit;
