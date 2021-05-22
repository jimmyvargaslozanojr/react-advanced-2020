import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: "peter",
    age: 22,
    message:'random message'
  });

  const [name, setName] = useState(['peter']);
  const [age, setAge] = useState(['22']);
  const [message, setMessage] = useState(['random message']);

  const changeMessage = () => {
    // setPerson({...person, message: 'Hello World'});
    setMessage('Hello World');
  };

  return (
    <>
   <h3>{name}</h3>
   <h4>{age}</h4>
   <h5>{message}</h5>
    <button type='button' className='btn' onClick={() => changeMessage()}>Change Message</button>
   </>
  );
};

export default UseStateObject;
