import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [values, setValues] = useState({});
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    let body = {
      ...values,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/add",
        body
      );

      if (data.success) {
        setValues({ name: "", email: "" });
        setMessage(data.message);
        setTimeout(() => {
          setMessage(false);
        }, 3000);
      } else {
        setError(data.error);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  const onInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        name="name"
        value={values.name}
        onChange={onInputChange}
        type="text"
        placeholder="Enter Your Name"
        required
      />
      <input
        name="email"
        value={values.email}
        onChange={onInputChange}
        type="email"
        placeholder="Enter Your Email"
        required
      />
      <button className="btn-primary" type="submit">
        Submit
      </button>
      {error && <div className="badge bg-red-300 text-red-700">{error}</div>}
      {message && (
        <div className="badge bg-green-300 text-green-700">{message}</div>
      )}
    </form>
  );
};

export default Form;
