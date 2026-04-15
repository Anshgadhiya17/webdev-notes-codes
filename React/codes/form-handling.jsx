import React, { useState } from "react";

const FormHandling = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormHandling;