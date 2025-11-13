"use client"

import style from "./blog.module.css";
import { useEffect, useState } from "react";

export default function blogs() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/two')
    .then(res => res.json())
    .then(data => {
      setMessage(data);
    })
  }, [])

  for (let i = 0; i < message.length; i++) {
    const li = document.createElement("LI");
    const teksti = document.createTextNode(`Title: ${message[i]["title"]}`);
    const lineBreak = document.createElement('br'); 
    const viiva = document.createElement('hr'); 
    const teksti2 = document.createTextNode(`Blogi: ${message[i]["blogi"]}`);
    
    li.appendChild(teksti);
    li.appendChild(lineBreak);
    li.appendChild(teksti2);
    li.appendChild(viiva);
    document.getElementById("myList").appendChild(li);

  }
  
  return (
    <main>
        <div className={style.div} >
          <h1 className={style.h1} >Blogi</h1>
          <ul className={style.ul} id="myList">
          </ul>
        </div>
    </main>
  )
}
