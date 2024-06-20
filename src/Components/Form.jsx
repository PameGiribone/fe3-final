import React from "react";
import Button from "./Button";
import { useState } from "react";
import Message from "./Message";
import { MessageError } from "./MessageError";


const Form = () => {
  const [cliente, setCliente] = useState({
    nombre: "",
    email: "",
  });
 
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const handleName = (e) => setCliente({ ...cliente, nombre: e.target.value });
  const handleEmail = (e) => setCliente({ ...cliente, email: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (cliente.nombre.length > 5 && regex.test(cliente.email)){
      setError(false);
      setShow(true);
      
    } else {
      setError(true);
      setShow(false);
    }
 
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label></label>
        <input type="text" placeholder="Full name"
        onBlur={handleName}/>
        <label></label>
        <input type="text" placeholder="Email"
        onBlur={handleEmail}/>
        <Button>Send</Button>
      </form>
      {show ? (<Message cliente={cliente}/>) : (null) }
      {error ? (<MessageError/>) : (null) }
    </div>
  );
};

export default Form;
