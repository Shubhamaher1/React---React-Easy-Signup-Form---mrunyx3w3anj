import React, { useState, useEffect } from "react";
import "../styles/App.css";
// import { validate } from 'schema-utils';
// import  From  from '../Comenent/From';
import { signUpFormValidation } from "../utils/validation";

const App = () => {
  const initialValue = {
    Username: " ",
    email: "",
    password: "",
    selected: false
  };
  const [formValue, setfrovalue] = useState(initialValue);
  const [formerror, setformerror] = useState({});

  const [isSubmit, setisSubmit] = useState(false);
  const handelchange = (event) => {
    const { name, value } = event.target;
    setfrovalue({ ...value, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setformerror(signUpFormValidation(formValue));
    setisSubmit(true);
  };

  useEffect(() => {
    console.log(formerror);
    if (Object.keys(formerror).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, []);
  return (
    <>
      <form onSubmit={handelSubmit}>
        <h1>Sign Up</h1>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={formValue.Username}
          onChange={handelchange}
        ></input>
        {formerror.name ? <p>{formerror.name}</p> : null}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formValue.email}
          onChange={handelchange}
        ></input>
        {formerror.email ? <p>{formerror.email}</p> : null}
        <label htmlFor="password">password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formValue.password}
          onChange={handelchange}
        ></input>
        {formerror.password ? <p>{formerror.password}</p> : null}
        <input
          type="checkbox"
          name="checkox"
          id="consent"
          value={formValue.selected}
          onChange={handelchange}
        ></input>
        <label htmlFor="checkbox"> this is check box</label>
        <button onClick={handelSubmit}>Signup</button>
      </form>
    </>
  );
};

export default App;
