import logo from './logo.svg';
import './App.css';
import Greetings from './Components/greetings';
import AddItems from './Components/addItems';
import ItemsList from './Components/itemsList';

function App() {
  return (
    <div className="container">
      <Greetings/>
      <AddItems/>
      <ItemsList/>
    </div>
  );
}

export default App;
