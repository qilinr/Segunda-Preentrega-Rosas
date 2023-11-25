
import './App.css';
import Navbar from './components/navbar/navbar';
import Itemlistcontainer from './components/itemlistcontainer/itemlistcontainer';
import Itemcount from './components/itemcount/itemcount'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Itemlistcontainer/>}/>
         <Route path='/category/:categoryId' element={<Itemlistcontainer />} />
         <Route path='/item/:itemId' element={<ItemDetailContainer />} />
         <Route path='*' element={<h1>404 NOT FOUND</h1>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
