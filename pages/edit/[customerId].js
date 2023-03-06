import FormEdit from "@/components/modules/FormEdit";
import ConnectDB from "@/utils/ConnectDB";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const EditPage = () => {
  const [data, setData] = useState(null);

  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;

  useEffect(() => {
    if (isReady) {
      fetch(`/api/customers/${customerId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, [isReady]);

  if (data) return <FormEdit data={data} id={customerId} />;
};

export default EditPage;
