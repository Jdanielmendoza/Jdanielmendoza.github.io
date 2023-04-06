import './App.css'
import { useState } from 'react'
import {
  DecToBinary, DecToHexa, BinToDecimal,
  BinToHexa, HexaToBinary, HexaToDecimal
} from './ConverterFunctions'

import MenuBar from './components/MenuBar/MenuBar'

function App() {
  let h = "hola";
  

  return (
    <div className="App">
      <input type="text" placeholder="type a number" className='input'/>
      <details>
        <summary>Convertir de...</summary>
        <ul>
          <li onClick={() =>{
             let Input = document.querySelector(".input").value;
             let Res =  document.querySelector(".res");
             let valor = DecToBinary(Input);
         
             Res.value = valor;
          }} >Decimal a Binario</li>

          <li onClick={() =>{
             let Input = document.querySelector(".input").value;
             let Res =  document.querySelector(".res");
             let valor = DecToHexa(Input);
         
             Res.value = valor;
          }}>Decimal a Hexadecimal</li>

          <li onClick={() =>{
             let Input = document.querySelector(".input").value;
             let Res =  document.querySelector(".res");
             let valor = BinToDecimal(Input);
         
             Res.value = valor;
          }}>Binario a Decimal </li>

          <li onClick={() =>{
             let Input = document.querySelector(".input").value;
             let Res =  document.querySelector(".res");
             let valor = BinToHexa(Input);
         
             Res.value = valor;
          }}>Binario a Hexadecimal </li>

          <li onClick={() =>{
             let Input = document.querySelector(".input").value;
             let Res =  document.querySelector(".res");
             let valor = HexaToDecimal(Input);
         
             Res.value = valor;
          }}>Hexadecimal a Decimal</li>

          <li onClick={() =>{
             let Input = document.querySelector(".input").value;
             let Res =  document.querySelector(".res");
             let valor = HexaToBinary(Input);
         
             Res.value = valor;
          }}>Hexadecimal a Binario</li>

        </ul>
      </details>

      <input type="text" readOnly className='res' />
    </div>
  )
}

export default App
