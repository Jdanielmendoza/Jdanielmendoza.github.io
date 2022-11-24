import './App.css';
import React, { useEffect, useState } from "react";
import Card from "./components/card-time/Card.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  const [Seconds, setSeconds] = useState(13);
  const [Minutos, setMinutos] = useState(0);
  const [Hora, setHora] = useState(0);
  const [Dia, setDia] = useState(3);

  //esto es para controlar la animacion de la hoja cayendose cada segundo
  const [Min, setMin] = useState(false);
  const [Hour, setHour] = useState(false);
  const [Day, setDay] = useState(false);


  if (Seconds === -1) {
    setSeconds(59);
    setMinutos(Minutos - 1);
    setMin(true);
  }
  if (Minutos === -1) {
    setMinutos(59);
    setHora(Hora - 1);
    setHour(true);
  }
  if (Hora === -1) {
    setHora(23);
    setDia(Dia - 1);
    setDay(true);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSeconds(Seconds => Seconds - 1);
      setMin(false); setHour(false); setDay(false);
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className='app'>
      <div className='img'></div>
      <div className='Cont-stars'><div className='stars'></div></div>
      <div className="container-background">
        <div className="titulo">
          <p>WE'RE LAUNCHING <br /> SOON</p>
        </div>
        <div className="timer">
           <Card num={"0" + Dia} activar={Day}  time="DAYS" />
          <Card num={Hora < 10 ?"0"+Hora : Hora}    activar={Hour} time="HOURS" />
          <Card num={Minutos < 10 ?"0"+Minutos : Minutos} activar={Min} time="MINUTES"/> 
          <Card num={Seconds < 10 ? "0" + Seconds : Seconds} activar="true" time="SECONDS" />
        </div>

      </div>

     <Footer/> 
     
     
    </div >
  );

}



export default App;

/*  const [Seconds, setSeconds] = useState(59);
if(Seconds ==-1){
  setSeconds(59);
 }

 useEffect(()=>{ 
   const intervalo = setInterval(() => {
     setSeconds(Seconds => Seconds-1);
    }, 1000);
   return ()=> clearInterval(intervalo); 
  },[]);
*/

/* const useTimer = (num) => {
    const [Seconds, setSeconds] = useState(num);
  
    if (Seconds == -1) {
      setSeconds(59);
    }
  
    useEffect(() => {
      const intervalo = setInterval(() => {
        setSeconds(Seconds => Seconds - 1);
      }, 1000);
      return () => clearInterval(intervalo);
    }, []);
    return ({
      Seconds
    });
  } */