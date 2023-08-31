import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Pokepage from './pages/pokedex/pokepage';
import Pokedex from './pages/home';

function App() {
  return (
    <BrowserRouter basename= "/hello-world">
      <Routes>
        <Route exact path='/' element={<Pokedex />}/>
        <Route path='/pokepage/:nomePokemon' element={<Pokepage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
