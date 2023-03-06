import styles from "../../pages/addCustomer/index.module.scss";
import FromInputs from "./FromInputs";
import ProductList from "./ProductList";

const Form = ({ customerInputs, setCustomersInput }) => {
  return (
    <div>
      <FromInputs
        customerInputs={customerInputs}
        setCustomersInput={setCustomersInput}
      />
      <ProductList
        customerInputs={customerInputs}
        setCustomersInput={setCustomersInput}
      />
    </div>
  );
};

export default Form;
