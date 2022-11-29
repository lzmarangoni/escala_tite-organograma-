import { useState } from 'react';
import Banner from './components/Banner';
import Container from './components/Container';
import Field from './components/Field';
import Form from './components/Form';



function App() {
  
  const positions = [' ','goleiro', 'zagueiro'];
  const [players, setPlayers] =useState([])

  const addNewPlayer = (player)=>{
    setPlayers([...players, player])
    console.log(players)
  }

  return (

    <div className="App">
      <Container>
        <Banner title="Escala TITE"/>
        <section >
          <Form items={positions} newPlayer={player => addNewPlayer(player)} />
          <Field>
            
          </Field>
        </section>
        </Container>
    </div>
  );
}

export default App;
