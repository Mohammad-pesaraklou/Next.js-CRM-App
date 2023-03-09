import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
// style
import styles from "../../styles/DetailsPage.module.scss";

const DetailsModule = ({ customerData }) => {
  const router = useRouter();

  const deleteHandler = async (id) => {
    const req = await axios.delete(`/api/customers/${id}`);
    console.log(req.data);
    router.push("/customers");
  };

  return (
    <div>
      <Typography variant="h4" mb={5} fontFamily={"Josefin Sans"}>
        Customer Details Page
      </Typography>
      <div className={styles.infoContainer}>
        <div>
          <p>
            <span>Name:</span>
            {customerData.name}
          </p>
          <p>
            {" "}
            <span>LastName:</span>
            {customerData.lastName}
          </p>
          <p>
            {" "}
            <span>Email:</span>
            {customerData.email}
          </p>
          <p>
            {" "}
            <span>Address:</span>
            {customerData.address}
          </p>
          <p>
            {" "}
            <span>PostalCode:</span>
            {customerData.postalCode}
          </p>
          <p>
            {" "}
            <span>Date:</span>
            {moment(customerData.date).utc().format("YYYY-MM-DD")}
          </p>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: { xs: 300, sm: 400, md: 800 } }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "rgb(221, 85, 7)" }}>Name</TableCell>
                <TableCell sx={{ color: "rgb(221, 85, 7)" }} align="right">
                  Qty
                </TableCell>
                <TableCell sx={{ color: "rgb(221, 85, 7)" }} align="right">
                  Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerData.products.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={styles.btnContainer}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minWidth: { xs: 300, sm: 400, md: 760 },
          }}
        >
          <div>
            <p>Edit Or Delete?</p>
          </div>
          <div>
            <Button
              onClick={() => deleteHandler(customerData._id)}
              variant="contained"
              color="secondary"
            >
              Delete
            </Button>
            <Link href={`/edit/${customerData._id}`}>
              <Button variant="contained">Edit</Button>
            </Link>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default DetailsModule;
