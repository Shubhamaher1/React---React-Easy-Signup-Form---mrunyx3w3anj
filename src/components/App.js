import React, { useState,useEffect } from 'react'
import "./styles/App.css";
// import { validate } from 'schema-utils';
// import  From  from '../Comenent/From';
import {signUpFormValidation} from "../utils/validation";

const App = () => {
  const initialValue={Username:" ",email:"",password:"",selected:false};
  const [formValue,setfrovalue ]=useState(initialValue);
  const [formerror,setformerror]=useState({});
  
  const [isSubmit,setisSubmit] =useState(false);
  const handelchange=(event)=>{
    const {name,value}=event.target;
    setfrovalue({...value,[name]:value})
  };
  function isEmailAddress(str) {

    return str.match(pattern);    

}
  const handelSubmit=(e)=>{
    e.preventDefault();
    setformerror(signUpFormValidation(formValue));
    setisSubmit(true);
  }
  
  useEffect(()=>{
    console.log(formerror);
    if(Object.keys(formerror).length===0&& isSubmit){
      console.log(formValue);
    }
  },[formerror])
  return (
    <>
   <form onSubmit={handelSubmit}>
   <h1>Sign Up</h1>
   
   <label htmlFor='name'>Name</label>
   <input id='name' name='name' value={formValue.Username} onChange={handelchange}
   ></input>
   <p>{formerror.name}</p>
   <label htmlFor='email' >Email</label>
   <input id='email' name='email' type="email" value={formValue.email}
   onChange={handelchange}
   ></input>
   <p>{formerror.email}</p>
   <label htmlFor='password' >password</label>
   <input id='password' name='password' type="password"value={formValue.password}
   onChange={handelchange}
   ></input>
   <p>{formerror.password}</p>
   <input type='checkbox' name="checkox" id='consent' value={formValue.selected}
   onChange={handelchange}
   ></input>
   <label htmlFor='checkbox'> this is check box</label>
   <button onClick={validate} >Signup</button>
   </form>
   
    
    </>
  )
}


export default App;
