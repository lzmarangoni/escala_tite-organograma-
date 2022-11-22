
import Form from './components/Form';
import Input from './components/Input';
import { List } from './components/List';

function App() {
  const positions = ['goleiro', 'zagueiro'];
  return (
    
    <div className="App">
      <Form>
          
        <Input label="Nome do Jogador"/>
        <Input label="Foto"/>
        <List listName="Posição" items= {positions} />
      </Form>
    </div>
  );
}

export default App;
