"use client"

import { useEffect, useState } from "react";

export default function blogs() {
  const [message, setMessage] = useState("");
  let text = ""

  useEffect(() => {
    fetch('/api/two')
    .then(res => res.json())
    .then(data => {
      setMessage(data);
    })
  }, [])

  for (let i = 0; i < message.length; i++) {
    console.log(message[i]) 
    text += `Title: ${message[i]["title"]}` + "<br>" + `Blogi: ${message[i]["blogi"]}`+ "<br>";
    document.getElementById("teksti").innerHTML = text;
  }
  
  
  return (
    <main>
        <div>
            <p id="teksti"></p>
        </div>
    </main>
  )
}
