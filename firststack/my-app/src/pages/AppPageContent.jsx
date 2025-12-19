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
      <div>
      <h1>Welcome</h1>
      </div>
    </>
  )
}

export default Eapp
