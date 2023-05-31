import React from 'react';

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
let  itemArray = new Array(9).fill("")


export default class App extends React.Component{

  // const[isCross,setIsCross] = useState(false)
  // const[winMessage,setWinMessage] = useState("")

  state ={
    isCross: false,
    winMessage: ""
  }
 

  reload = () => {
    //setIsCross(false);
    this.setState({isCross: false})
    //setWinMessage("");
    this.setState({winMessage: ""})

    itemArray.fill("", 0, 9);

  }

  checkIsWinner = () => {
    //  checking  winner of the game
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== ""
    ) {
      console.log('condition1')
      //setWinMessage(`${itemArray[0]} won`);
      this.setState({winMessage: `${itemArray[0]} won`})
    } else if (
      itemArray[3] !== "" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      console.log('condition2')

      this.setState({winMessage:`${itemArray[3]} won`});
    } else if (
      itemArray[6] !== "" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      console.log('condition1')

      this.setState({winMessage:`${itemArray[6]} won`})
    } else if (
      itemArray[0] !== "" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      console.log('condition1')

      this.setState({winMessage:`${itemArray[0]} won`})
    } else if (
      itemArray[1] !== "" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      console.log('condition1')

      this.setState({winMessage: `${itemArray[1]} won`})
    } else if (
      itemArray[2] !== "" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      console.log('condition1')

      this.setState({winMessage:`${itemArray[2]} won`});
    } else if (
      itemArray[0] !== "" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      console.log('condition1')

      this.setState({winMessage: `${itemArray[0]} won`});
    } else if (
      itemArray[2] !== "" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      console.log('condition1')

      this.setState({winMessage: `${itemArray[2]} won`})
    }
  };

  changeItem = (key) => {
   //e.preventDefault()
   if(this.state.winMessage===""){
    if(itemArray[key] === ""){
      
      itemArray[key] = this.state.isCross? 'cross' : 'circle'
      
      //setIsCross(!isCross)
      this.setState(prev => ({isCross:!prev.isCross}))
    }
   } 
   console.log(itemArray)
   console.log("win message:",this.state.winMessage)
    //checkIsWinner()
   this.checkIsWinner()
 
  }


  render(){


    return (
      <div className='h-screen flex justify-center items-center flex-col' >
      
          <h1 className='p-4' >TIC tac toe</h1>

         <div className='flex justify-center p-2 ' >
         {this.state.winMessage !== "" ? (
          <div>
            <h2>{this.state.winMessage}</h2>
            <button onClick={this.reload}>Reload the game</button>
          </div>
        ) : (
            <h2>Player {this.state.isCross ? "Cross" : "Circle"} turns </h2>
        )}
      
         </div>
        <div className=' bg-slate-400 w-40 h-40 flex justify-center items-center flex-wrap '  >
           {
              
              itemArray.map((item,key) => (
                <div className='w-[33%] h-[33%] border flex justify-center items-center ' key={key} onClick={()=>this.changeItem(key)} >
                  {item}
                </div>
               ) )
           }
        </div>
      </div>
    );
  }
  
}

//export default App;
