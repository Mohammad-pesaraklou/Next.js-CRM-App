import React from "react";

const FromInputs = ({ customerInputs, setCustomersInput }) => {
  const changeHandler = (e) => {
    setCustomersInput({
      ...customerInputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form action="">
      <input
        onChange={changeHandler}
        value={customerInputs.name}
        placeholder="Enter Your Name"
        type="text"
        name="name"
      />
      <input
        onChange={changeHandler}
        value={customerInputs.lastName}
        placeholder="Enter Your LastName"
        type="text"
        name="lastName"
      />
      <input
        onChange={changeHandler}
        value={customerInputs.email}
        placeholder="Enter Your Email"
        type="email"
        name="email"
      />
      <input
        onChange={changeHandler}
        value={customerInputs.address}
        placeholder="Enter Your Address"
        type="text"
        name="address"
      />
      <input
        onChange={changeHandler}
        value={customerInputs.postalCode}
        placeholder="Enter Your PostalCode"
        type="text"
        name="postalCode"
      />
      <input
        onChange={changeHandler}
        value={customerInputs.date}
        type="date"
        name="date"
      />
    </form>
  );
};

export default FromInputs;
