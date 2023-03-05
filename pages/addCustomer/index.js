import Form from "@/components/modules/Form";
import { Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./index.module.scss";

const AddCustomer = () => {
  const [customerInputs, setCustomersInput] = useState({
    name: "",
    lastName: "",
    email: "",
    address: "",
    postalCode: "",
    date: "",
  });
  const router = useRouter();

  const sendHandler = async () => {
    const req = await axios.post("api/customers", { customerInputs });
    setCustomersInput({
      name: "",
      lastName: "",
      email: "",
      address: "",
      postalCode: "",
      date: "",
    });
    console.log(req.data);
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
        <Button variant="contained" color="primary" onClick={sendHandler}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default AddCustomer;
