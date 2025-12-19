import React, { useState, useEffect } from "react";
import { data } from "react-router-dom";

function Eapp() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
  }, []);

  console.log(message)
  
  useEffect(() => {
    fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "moi flask" }),
      
    });
  }, []);

  return (
    <>
      <h1>Terve, lisää kirja tietokantaan</h1>
      <div>
        <form method="post" style={{ width: "180px"}}>
          <label style={{ float: "left"}}>
            kirjanimi: 
          </label>
          <input style={{ float: "left"}} name="myInput" placeholder="nimi" />
          
          <label style={{ float: "left"}}>
            kirjakuvaus: 
          </label>
          <textarea style={{ float: "left"}} rows={10} cols={50} name="myInput" placeholder="kuvaus" />
          
          <label style={{ float: "left"}}>
            kirjajulkaisupäivä: 
          </label>
          <input style={{ float: "left"}} type="date" placeholder="päivä" />
          
          <button style={{ float: "left"}} type="submit">Submit form</button>
      </form>
      </div>
    </>
  )
}

export default Eapp