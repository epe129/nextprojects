import React, { useState, useEffect } from "react";


function First() {
  // const [message, setMessage] = useState("");
  
  useEffect(() => {
    fetch("/api/hello")
    .then((res) => res.json())
    .then((data) => data.forEach((element) => console.log(element)))
  }, []);

 

  return (
    <>
      <h1>hei, katso kirjoja tietokannasta</h1>

      <div>
      </div>
    </>
  )
}

export default First
