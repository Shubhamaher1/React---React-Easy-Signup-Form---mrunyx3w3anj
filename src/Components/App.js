import React, { useState, useEffect } from "react";
import "../styles/App.css";
// import { validate } from 'schema-utils';
// import  From  from '../Comenent/From';
import { signUpFormValidation } from "../utils/validation";

function App() {
  const initialValue = {
    email: "",
    password: "",
    name: ""
    // selected: false
  };
  const [formValue, setfrovalue] = useState(initialValue);
  const [formerror, setformerror] = useState(null);

  const [isSubmit, setisSubmit] = useState(false);
  function handelchangeu(event) {
    setfrovalue({
      email: formValue.email,
      password: formValue.password,
      name: event.target.value
    });
    console.log(formValue.name);
  }
  function handelchangee(event) {
    setfrovalue({
      email: event.target.value,
      password: formValue.password,
      name: formValue.name
    });
    console.log(formValue.name);

    // console.log(name);
  }
  function handelchangep(event) {
    setfrovalue({
      email: formValue.email,
      password: event.target.value,
      name: formValue.name
    });
    console.log(formValue.name);
    // console.log(name);
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    setformerror(signUpFormValidation(formValue));
    if (Object.keys(formerror).length === 0) {
      setisSubmit(true);
      // console.log("sumbti");
    }
  };

  // useEffect(() => {
  //   // console.log(formerror);
  // if (Object.keys(formerror).length === 0 && isSubmit === true) {
  // console.log(formValue);
  // console.log("submit");
  //   }
  // }, [formerror, formValue, isSubmit]);
  return (
    <>
      <form>
        <h1>Sign Up</h1>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={formValue.name}
          onChange={handelchangeu}
        ></input>
        {Object.key(formerror.name).length !== 0 ? (
          <p>{formerror.name}</p>
        ) : null}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formValue.email}
          onChange={handelchangee}
        ></input>
        {Object.key(formerror.email).length !== 0 ? (
          <p>{formerror.email}</p>
        ) : null}
        <label htmlFor="password">password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formValue.password}
          onChange={handelchangep}
        ></input>
        {Object.key(formerror.password).length !== 0 ? (
          <p>{formerror.password}</p>
        ) : null}
        <input
          type="checkbox"
          name="checkox"
          id="consent"
          // value={formValue.selected}
          // onChange={handelchange}
        ></input>
        <label htmlFor="checkbox"> this is check box</label>
        <button onClick={handelSubmit} type="submit">
          Signup
        </button>
      </form>
    </>
  );
}

export default App;
