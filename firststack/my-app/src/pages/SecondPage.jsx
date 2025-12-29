import React, { useState, useEffect } from "react";

function First() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data));
  }, [])

  const renderedItems = [];

  for (let i = 0; i < message.length; i++) {
    renderedItems.push(<div style={{
      width: "30%",
      margin: "0 auto"
    }} key={i}>
      
      <br/>
      <br/>

      <span style={{fontSize: "2rem"}}><span style={{ fontWeight: "900"}}>Nimi:</span> {message[i][0]}</span>
      
      <br/>
      
      <span style={{fontSize: "2rem"}}><span style={{ fontWeight: "900"}}>tekija:</span>{message[i][1]}</span>
      
      <br/>
      
      <span style={{fontSize: "2rem"}}><span style={{ fontWeight: "900"}}>kuvaus:</span> {message[i][2]}</span>
      
      <br/>
      
      <span style={{fontSize: "2rem"}}><span style={{ fontWeight: "900"}}>päivämäärä:</span> {message[i][3]}</span>
      
      <br/>
      
      <span style={{fontSize: "2rem"}}><span style={{ fontWeight: "900"}}>hinta:</span> {message[i][4]}€</span>
      
      </div>);
  }
  
  return (
    <>
      <h1 style={{ fontSize: "3rem" }}>hei, katso kirjoja tietokannasta</h1>
      <div style={{ float: "none", textAlign: "left"}}>
        {renderedItems}
      </div>
    </>
  )
}

export default First
