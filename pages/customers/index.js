import {
  Box,
  Button,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
// styles
import styles from "../../styles/Customers.module.scss";
// components
import CustomersPage from "@/components/modules/CustomersPage";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    const req = await axios("api/customers");
    setCustomers(req.data.data);
  };
  useEffect(() => {
    getCustomers();
  }, []);
  if (!customers.length)
    return (
      <LinearProgress
        color="info"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "4px",
          marginTop: "80px",
        }}
      />
    );

  return (
    <Container>
      <div className={styles.container}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h3" fontFamily={"Josefin Sans"}>
            Customers Page
          </Typography>
          <Link href={"/addCustomer"}>
            <Button variant="contained">Add Customer</Button>
          </Link>
        </Box>
        <div className={styles.customersContainer}>
          <CustomersPage customers={customers} getData={getCustomers} />
        </div>
      </div>
    </Container>
  );
};

export default Customers;
