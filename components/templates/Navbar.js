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
          alignItems: "center",
          position: "sticky",
        }}
      >
        <div className={styles.logoContainer}>
          <Link href={"/"}>
            <Typography variant="h6">CRM APP</Typography>
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link href="/customers">
            <p>Customers</p>
          </Link>
          <Link href={"/employees"}>
            <p>Employees</p>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
