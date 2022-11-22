import Banner from './components/Banner';
import { Button } from './components/Button';
import Form from './components/Form';
import Input from './components/Input';
import { List } from './components/List';

function App() {
  const positions = ['goleiro', 'zagueiro'];
  


  return (

    <div className="App">
      <Banner title="Escala TITE"/>
      <Form>
        <Input label="Nome do Jogador"/>
        <Input label="Foto"/>
        <List listName="Posição" items= {positions} />
        <Button nameButton="Escalar"/>
      </Form>
    </div>
  );
}

export default App;
