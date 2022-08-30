import comillas from './assets/comillas.png';
import { useState } from 'react';
import logo from './logo.svg';
import quotes from './quotes.json';
import './App.css';
import randomColor from 'randomcolor';

function App() {

  let color = randomColor()
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


  const [text, setText] = useState(quotes[randomInt(0, quotes.length)].quote)

  const changeText = () => {
    setText(quotes[randomInt(0, quotes.length)].quote)
    document.querySelector('.btncolor').style.backgroundColor = color;
    document.body.style.backgroundColor = color;
  }

  console.log(quotes)

  return (
    <div className="App">
      <section class='ctn'>
        <section class='up'>
          <img src={comillas} alt='quotes'></img>
          <p>{text}</p>
        </section>
        <section class='down'>
          <button class='btncolor' onClick={changeText}>></button>
        </section>
      </section>
    </div>
  );
}

export default App;
