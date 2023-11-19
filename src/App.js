
import './App.css';
import Navbar from './components/navbar/navbar';
import Itemlistcontainer from './components/itemlistcontainer/itemlistcontainer';
import Itemcount from './components/itemcount/itemcount'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Itemlistcontainer greeting={'Bienvenidos'} />
     <Itemcount
     initial={1}
     stock={10}
     onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}
    />
    </div>
  );
}

export default App;
