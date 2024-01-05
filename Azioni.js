import React from 'react'
const Esempio = () => {
  const Funzione=()=>{
    let Variabile=1;
    console.log(Variabile)
  };
  return (
    <div>
    <input type="button" onClick={Funzione} value="clicca"/>
    </div>
  );
};
export default Esempio