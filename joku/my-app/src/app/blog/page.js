"use client"

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

  console.log(message)

  return (
    <main>
        <div>
            <p>{message}</p>
        </div>
    </main>
  )
}
