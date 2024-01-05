import React from 'react'
const Esempio = () => {
  const Funzione=()=>{
    let Variabile=1;
    return Variabile;
  };
  let numero =Funzione();
  return (
    <div><p>Return della funzione:</p><p>{numero}</p></div>
  );
};
export default Esempio