import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';


function App() {
  
 
  const [players, setPlayers] =useState([])

  const addNewPlayer = (player)=>{
    setPlayers([...players, player])
    console.log(players)
  }

  return (

    <div className="App">
      <Banner title="Escala TITE"/>
      <Form newPlayer={player => addNewPlayer(player)} />

      
    </div>
  );
}

export default App;
