import './App.css';
import Header from './components/Header';
import React, { useEffect, useState } from 'react';
import { planets } from './data';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [planet, setPlanet] = useState({});

  function setIndexPlanet(index) {
    setPlanet(planets[index]);
  }

  useEffect(()=>{
    setPlanet(planets[0]);
  },[]);
  return (
    <div className="App">
      <Header setIndexPlanet={setIndexPlanet}/>
      <Main planet={planet}/>
      <Footer planet={planet}/>
    </div>
  );
}

export default App;
