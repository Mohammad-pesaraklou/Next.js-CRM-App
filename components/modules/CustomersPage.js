import { Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import styles from "../../styles/Customers.module.scss";

const CustomersPage = ({ customers, getData }) => {
  const deleteHandler = async (id) => {
    const req = await axios.delete(`api/customers/${id}`);
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
            <button
              className={styles.dltBtn}
              onClick={() => deleteHandler(i._id)}
            >
              Delete
            </button>
            <Link href={`/edit/${i._id}`}>
              <button className={styles.editBtn}>Edit</button>
            </Link>
            <Link href={`/customers/${i._id}`}>
              <button className={styles.dtlBtn}>Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomersPage;
