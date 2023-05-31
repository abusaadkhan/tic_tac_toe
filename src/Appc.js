import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
let  itemArray = new Array(9).fill("")


function App() {

  const[isCross,setIsCross] = useState(false)
  const[winMessage,setWinMessage] = useState("")
 

  const reload = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("", 0, 9);

  }

  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== ""
    ) {
      console.log('condition1')
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== "" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      console.log('condition2')

      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== "" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      console.log('condition1')

      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== "" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      console.log('condition1')

      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      console.log('condition1')

      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== "" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      console.log('condition1')

      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      console.log('condition1')

      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      console.log('condition1')

      setWinMessage(`${itemArray[2]} won`);
    }
  };

  const changeItem = (key) => {
  
   if(winMessage==""){
    if(itemArray[key] === ""){
      
      itemArray[key] = isCross? 'cross' : 'circle'
      
      setIsCross(!isCross)
    }
   } 

    checkIsWinner()
  }



  return (
    <div className='h-screen flex justify-center items-center flex-col' >
    {console.log('win message:',winMessage)}
        <h1>TIC tac toe</h1>
        {winMessage !== ''? (
          <div>
            <h2>{winMessage}</h2>
            <button onClick={reload}>Reload the game</button>
          </div>
        ) : (
            <h2>Player {isCross ? "Cross" : "Circle"} turns </h2>
        )}
      <ul className=' bg-slate-400 w-40 h-40 flex justify-center items-center flex-wrap '  >
         {
            
            itemArray.map((item,key) => (
              <div className='w-[33%] h-[33%] border flex justify-center items-center ' key={key} onClick={()=>changeItem(key)} >
                <li >{item}</li>
              </div>
             ) )
         }
      </ul>
    </div>
  );
}

export default App;
