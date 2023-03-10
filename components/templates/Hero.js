import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
// style
import styles from "./Hero.module.scss";
// bg
import MyBg from "../../public/images/3270961.jpg";
const Hero = () => {
  return (
    <div className={styles.container}>
      <Image src={MyBg} className={styles.image} alt="bg image" />
      <div>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero
          quidem magnam sapiente voluptatum, reiciendis ratione assumenda
          quaerat eaque? Vel.
        </h4>
        <Link href={"/customers"}>
          <Button variant="contained" sx={{ mt: 2 }}>
            Explore All Customers
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
