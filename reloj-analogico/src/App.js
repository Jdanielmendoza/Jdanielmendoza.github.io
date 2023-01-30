import './App.css';
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Circle = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  z-index: 10;

  transform: rotateZ(${props => props.rotZ}deg); 
  
`;

const Il = styled.i`
  position: absolute;
  width: ${(props) => props.Width};
  height: 50%;
  background: ${(props) => props.Bg};
  transform-origin: bottom;
  transform: scaleY(${(props) => props.Scale});
`; 

function App() {
  const [Seconds, setSeconds] = useState(13);
  const [Minutos, setMin] = useState(0);
  const [Hora, setHora] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      const fecha = new Date();
      let hh = fecha.getHours() * 30;
      let mm = fecha.getMinutes() * 6;
      let ss = fecha.getSeconds() * 6;

      setHora(hh);
      setMin(mm);
      setSeconds(ss);

    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="App">
      <div className="clock">
        <div className="numbers">
          <span id="s0"><b id="f0" >12</b></span>
          <span id="s1"><b id="f1" >3</b></span>
          <span id="s2"><b id="f2" >6</b></span>
          <span id="s3"><b id="f3" >9</b></span>
          <Circle rotZ={Hora} ><Il Width="4px" Bg="#fff" Scale="0.3" ></Il> </Circle>
          <Circle rotZ={Minutos} ><Il Width="3px" Bg="#fff" Scale="0.45"></Il> </Circle>
          <Circle rotZ={Seconds}><Il Width="2px" Bg="#e91e63" Scale="0.55" ></Il> </Circle>
        </div>
      </div>
    </div>
  );
}

export default App;
