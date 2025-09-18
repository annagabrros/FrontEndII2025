'use client';
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  //let cont = 0;
  const [cont, setCont] = useState(0);

  const Subtrair = () => {
    setCont (cont - 1);
    console.log(cont);
  }

  const Adicionar = () => {
    setCont (cont + 1);
    console.log(cont);
  }
  return (
    <div>
      <h1 className={styles.h1}>Hello World!</h1>
      <p className={styles.paragrafo}>Meu parágrafo</p>
      <p>Contagem {cont} </p>
      <button onClick={Adicionar}>Adicionar</button>
      <button onClick={ () => {Subtrair()}}>Subtrair</button>
    </div>
  );  
}
