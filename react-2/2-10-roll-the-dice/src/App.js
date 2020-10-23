import React from 'react';
import './App.css';

// This returns one number randomly from 1 to 6

function App() {
  const [dices, setDices] = React.useState([1,1]);
  const [numDices, setNumDices] = React.useState([2]);
  const tirarDado = () => Math.floor(Math.random() * 6) + 1;
  const handleClick = () => {
    setDices(tirarDados()); 
  };

  const tirarDados = () =>{
    const arrayDices = [];
    for (let i = 0; i < numDices; i++) {
        arrayDices.push(tirarDado());
        }
        console.log(arrayDices)

        return arrayDices;
    }
  const winCondition(array){
    array.find() != 6;


  }
    
  
  return (
    <div className="App">
      <input value={numDices} type="number" onChange={e => setNumDices(e.currentTarget.value)}/>
      <button onClick={handleClick}>Tirar Dados</button>
      {dices.map((data, i) => <p>Alea iacta est {data} </p>)}
      {winCondition(dices) && <p>You win!</p>}
    </div>
  );
}
export default App;
