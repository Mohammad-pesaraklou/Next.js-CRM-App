import { Button } from "@mui/material";
import styles from "../../styles/ProductsList.module.scss";

const ProductList = ({ customerInputs, setCustomersInput }) => {
  const { products } = customerInputs;

  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    console.log(products);
    setCustomersInput({ ...customerInputs, products: newProducts });
  };

  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setCustomersInput({ ...customerInputs, products: newProducts });
  };

  return (
    <div className={styles.container}>
      {products?.map((item, index) => (
        <div key={index} className={styles.itemContainer}>
          <div className={styles.nameSection}>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              value={item.name}
              onChange={(e) => changeHandler(e, index)}
            />
          </div>
          <div className={styles.bottomSection}>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                value={item.price}
                onChange={(e) => changeHandler(e, index)}
              />
            </div>
            <div>
              <label htmlFor="qty">quantity</label>
              <input
                type="text"
                name="qty"
                value={item.qty}
                onChange={(e) => changeHandler(e, index)}
              />
            </div>
          </div>
          <Button
            sx={{ maxWidth: "200px" }}
            className={styles.dltBtn}
            color="secondary"
            variant="outlined"
            onClick={() => deleteHandler(index)}
          >
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
