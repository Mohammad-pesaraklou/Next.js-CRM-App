import CustomersPage from "@/components/modules/CustomersPage";
import { Box, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../styles/Customers.module.scss";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    const req = await axios("api/customers");
    setCustomers(req.data.data);
  };
  useEffect(() => {
    getCustomers();
  }, []);

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
