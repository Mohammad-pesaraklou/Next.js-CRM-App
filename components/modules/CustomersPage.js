import { Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import styles from "../../styles/Customers.module.scss";

const CustomersPage = ({ customers, getData }) => {
  const deleteHandler = async (id) => {
    const req = await axios.delete(`api/customers/${id}`);
    console.log(req.data);
    getData();
  };

  return (
    <div className={styles.customersContainer}>
      {customers?.map((i) => (
        <div key={i._id} className={styles.table}>
          <div className={styles.detailsContainer}>
            <h3>{i.name}</h3>
            <p>{i.email}</p>
          </div>
          <div className={styles.btnContainer}>
            <Button variant="outlined" onClick={() => deleteHandler(i._id)}>
              Delete
            </Button>
            <Link href={`/edit/${i._id}`}>
              <Button variant="outlined">Edit</Button>
            </Link>
            <Button variant="outlined">Details</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomersPage;
