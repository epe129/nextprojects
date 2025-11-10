'use client'

import styles from "./page.module.css";
import { useState } from 'react';

const todos = []

export default function Home() {
  const [tehtava, setTehtava] = useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
    
    let onko = todos.includes(tehtava);
    
    if (onko == false) {
      todos.push(tehtava)    
    } 
    
    let text = "";

    for (let i = 0; i < todos.length; i++) {
      text += todos[i] + "<br>";
    }

    document.getElementById("demo").innerHTML = text;
  };
  
  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Todo app</h1>
      <div className={styles.todoDiv}>
        <form className={styles.form} onSubmit={handleSubmit}>
          Todo: <input className={styles.input} value={tehtava} onChange={e => setTehtava(e.target.value)}/>
        </form>
        <p className={styles.tehtavat} id="demo"></p>
      </div>
    </div>
  );
}
