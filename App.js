import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayok=["tg","89jhjh","nbn45","ytyt44"]
  return (
    <div className="App">

<MovieCounter></MovieCounter>



<Hero name={nayok[2]}></Hero>
<Hero name="Pabel"></Hero>
<Hero name ="Shahrukh"></Hero>
<Hero></Hero>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
    </div>
  );
}

//use state or hook

function MovieCounter(){
  const [count, setCount]=useState(0);
  const handleClick = () => setCount(count + 1);
 
  return(
    <div style={{margin:"60px"}}>
    <h2>Number of movies:{count}</h2>
    <button onClick={handleClick}>Add Movie</button>
    </div>
  )

}


//making components


function Hero(props){
  const heroStyle={
    border:"3px solid red",
    margin:"20px",
    padding:"15px",
    width:"500px",
    float:"left"

  }
  return(
    <div style={heroStyle}>
      <h1>Hey , Dude {props.name}</h1>
    <h3>Hello.Good morning</h3>
    </div>
  )
}

export default App;
