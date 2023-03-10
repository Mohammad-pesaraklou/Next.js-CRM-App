// DB
import Customer from "@/models/Customer";
import ConnectDB from "@/utils/ConnectDB";
// style
import styles from "../../styles/DetailsPage.module.scss";
// component
import DetailsModule from "@/components/modules/DetailsModule";

const CustomerDetail = ({ customerData }) => {
  return (
    <div className={styles.container}>
      <DetailsModule customerData={customerData} />
    </div>
  );
};

export default CustomerDetail;

export async function getServerSideProps(context) {
  const {
    params: { id },
  } = context;

  try {
    await ConnectDB();
  } catch (err) {
    console.log(err);
    return;
  }
  try {
    const customerData = await Customer.findById({ _id: id });
    return {
      props: {
        customerData: JSON.parse(JSON.stringify(customerData)),
      },
    };
  } catch (err) {
    console.log(err);
    return;
  }
}
