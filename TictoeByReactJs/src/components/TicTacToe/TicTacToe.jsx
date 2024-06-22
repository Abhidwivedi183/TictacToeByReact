import React, { useRef, useState } from "react";
import './TicTacToe.css'

let data = ["","","","","","","","",""];


export default function TicTacToe(){

  let tittleref = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

let [count,setCount] = useState(0);
let [lock,setLock] = useState(false);
const toggle = (e,num)=>{
  if(lock){
  return 0;
  }
  if(count%2=== 0){
    e.target.innerHTML =  `<img src = ${'https://cdn-icons-png.flaticon.com/128/1828/1828665.png'} alt="" />  `   
    data[num] = "x";
    setCount(++count);

  }
  else{
    e.target.innerHTML = `<img src=${'https://cdn-icons-png.flaticon.com/128/399/399278.png'} alt="" />`
    data[num] = "o";
    setCount(++count);
                           
  }
  checkwin();
}
const won = (winner)=>{
  setLock(true);
  if(winner === "x"){
    tittleref.current.innerHTML = `Congratulations:<img src = ${'https://cdn-icons-png.flaticon.com/128/1828/1828665.png'} /> `
  }
  else if(winner === "o"){
    tittleref.current.innerHTML = `Congratulations: <img src=${'https://cdn-icons-png.flaticon.com/128/399/399278.png'} />`
  }
}

const checkwin = ()=>{
  if(data[0] === data[1] && data[1] === data[2] && data[2]!==""){
won(data[2]);
  }
 else if(data[3] === data[4] && data[4] === data[5] && data[5]!==""){
    won(data[5]);
      }
   else  if(data[6] === data[7] && data[7] === data[8] && data[8]!==""){
        won(data[8]);
          }
        else  if(data[0] === data[3] && data[3] === data[6] && data[6]!==""){
            won(data[6]);
              }
            else  if(data[1] === data[4] && data[4] === data[7] && data[7]!==""){
                won(data[7]);
                  }
                  else  if(data[2] === data[5] && data[5] === data[8] && data[8]!==""){
                    won(data[8]);
                      }
                      else  if(data[0] === data[4] && data[4] === data[8] && data[8]!==""){
                        won(data[8]);
                          }
                          else  if(data[0] === data[1] && data[1] === data[2] && data[2]!==""){
                            won(data[2]);
                              }

                              else  if(data[2] === data[4] && data[4] === data[6] && data[6]!==""){
                                won(data[6]);
                                  }


}
const restart = ()=>{
  setLock(false);
  tittleref.current.innerHTML = `Tic Tac Toe Game In <span>React</span>`;
  data = ["","","","","","","","",""];
  box1.current.innerHTML = "";
  box2.current.innerHTML = " ";
  box3.current.innerHTML = "";
  box4.current.innerHTML = "";
  box5.current.innerHTML = "";
  box6.current.innerHTML = "";
  box7.current.innerHTML = "";
  box8.current.innerHTML = "";
  box9.current.innerHTML = "";
}


  return(
    <div className="container">
<h3 className="tittle" ref = {tittleref}>Tic Tac Toe Game In <span>React</span></h3>
<div className="board">
<div className="row1">
  <div className="boxes" onClick={(e)=>(toggle(e,0))} ref={box1} ></div>
  <div className="boxes" onClick={(e)=>(toggle(e,1))}ref={box2}  ></div>
  <div className="boxes" onClick={(e)=>(toggle(e,2))}ref={box3}  ></div>
</div>
<div className="row2">
  <div className="boxes" onClick={(e)=>(toggle(e,3))} ref={box4} ></div>
  <div className="boxes" onClick={(e)=>(toggle(e,4))} ref={box5}  ></div>
  <div className="boxes" onClick={(e)=>(toggle(e,5))} ref={box6} ></div>
</div>
<div className="row3">
  <div className="boxes" onClick={(e)=>(toggle(e,6))} ref={box7} ></div>
  <div className="boxes" onClick ={(e)=>(toggle(e,7))}ref={box8}  ></div>
  <div className="boxes" onClick={(e)=>(toggle(e,8))} ref={box9} ></div>
</div>

</div>
<button className="reset" onClick={restart}>Reset</button>

    </div>
  )
}