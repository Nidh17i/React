import { useRef } from "react";

export const UncontrolledC = () => {
 
  const inputRef = useRef(null);
  const passRef = useRef(null);


  const handleSubmitRef = (event) => {
    event.preventDefault();
    const username = inputRef.current.value;
    const password = passRef.current.value;
    console.log(" useRef:", username, password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = document.querySelector('#username1').value;
    const password = document.querySelector('#pass1').value;
    console.log(" querySelector:", username, password);
  };

  return (
    <>
      <h4>Uncontrolled Components (querySelector)</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" id="username1" placeholder="Enter Username" />
        <br /><br />
        <input type="password" id="pass1" placeholder="Enter Password" />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      <h4>Uncontrolled Components (useRef)</h4>
      <form onSubmit={handleSubmitRef}>
        <input ref={inputRef} type="text" id="username2" placeholder="Enter Username" />
        <br /><br />
        <input ref={passRef} type="password" id="pass2" placeholder="Enter Password" />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};