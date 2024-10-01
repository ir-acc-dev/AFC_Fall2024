import { useState } from 'react'
import './App.css'
import Dice from './components/Dice'
import { randomNumber } from './helper';

function App() {

  const[firstDie, setFirstDie] = useState(null);
  const[secondDie, setSecondDie] = useState(null);
  const[total, setTotal] = useState(null);

  const handleClick = () => {
    const die1 = randomNumber();
    const die2 = randomNumber();
    const total = (die1+1) + (die2+1);
    
    setFirstDie(die1);
    setSecondDie(die2);
    setTotal(total);
  };

  return (
    <>
      
      <h1>Roll the Dice</h1>

      <div className = "dice-container">
        {firstDie !== null && <Dice value={firstDie} />}
        {secondDie !== null && <Dice value={secondDie} />}
      </div>

      <div>
        <button onClick={handleClick}>Click to Roll</button>
        <h3>Roll Equals: {total} </h3>
      </div>
  
   
    </>
  )
}

export default App
