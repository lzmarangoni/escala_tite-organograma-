import { useState } from 'react';
import Banner from './components/Banner';
import Container from './components/Container';
import Field from './components/Field';
import Form from './components/Form';
import Position from './components/Position';



function App() {
  
  const positions = [
    { position:'Goleiro',
      yAxis:'20rem',
      xAxis:''
    },
    { position:'Zagueiro-Esq',
      yAxis:'15rem',
      xAxis:'25rem'
    },
    { position:'Zagueiro-Dir',
      yAxis:'15rem',
      xAxis:'13rem'
    },
    { position:'Lateral-Esq',
      yAxis:'11rem',
      xAxis:'31rem'
    },
    { position:'Lateral-Dir',
      yAxis:'11rem',
      xAxis:'8rem'
    },
    { position:'Volante',
      yAxis:'10rem',
      xAxis:''
    },
    { position:'Meia-Esq',
      yAxis:'7rem',
      xAxis:'26rem'
    },
    { position:'Meia-Dir',
    yAxis:'7rem',
    xAxis:'13rem'
    },
    {
      position: 'Ponta-Esq',
      yAxis: '0.25rem',
      xAxis: '26rem'
    },
    {
      position: 'Ponta-Dir',
      yAxis: '0.25rem',
      xAxis: '13rem'
    },
    { position:'Centravante',
    yAxis:'0',
    xAxis:''
  },
  ];
  const [players, setPlayers] = useState([])

  const addNewPlayer = (player)=>{
    setPlayers([...players, player])
    console.log(players)
  }

  return (

    <div className="App">
      <Container>
        <Banner title="Escala TITE"/>
        <section>
          <Form items={positions.map(position=> [position.position])} newPlayer={player => addNewPlayer(player)} />
          <Field>
              {positions.map(position =>
                <Position position={position.position}
                key={position.position}
                  xAxis={position.xAxis}
                  yAxis={position.yAxis}
                  player={players.filter(player => player.position === position.position)}/>)}
          </Field> 
        </section>
        </Container>
    </div>
  );
}

export default App;
