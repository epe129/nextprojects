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
      width: "30%"
    }} key={i}>
      
      <br/>

      <span style={{fontSize: "2rem"}}>Nimi: {message[i][0]}</span>
      
      <br/>
      
      <span style={{fontSize: "2rem"}}>tekija: {message[i][1]}</span>
      
      <br/>
      
      <span style={{fontSize: "2rem"}}>kuvaus: {message[i][2]}</span>
      
      <br/>
      
      <span style={{fontSize: "2rem"}}>päivämäärä: {message[i][3]}</span>
      
      <br/>
      
      <span style={{fontSize: "2rem"}}>hinta: {message[i][4]}</span>
      
      </div>);
  }
  
  return (
    <>
      <h1>hei, katso kirjoja tietokannasta</h1>
      <div style={{ float: "none", textAlign: "left"}}>
        {renderedItems}
      </div>
    </>
  )
}

export default First
