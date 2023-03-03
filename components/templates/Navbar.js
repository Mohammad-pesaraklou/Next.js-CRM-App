import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
// styles
import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <AppBar>
      <Toolbar
        sx={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.logoContainer}>
          <Typography variant="h6">CRM APP</Typography>
        </div>
        <div className={styles.logoContainer}>
          <Link href="">
            <p>Customers</p>
          </Link>
          <Link href="">
            <p>Employees</p>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
