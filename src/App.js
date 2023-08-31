import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Pokepage from './pages/pokedex/pokepage';
import Pokedex from './pages/home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Pokedex />}/>
        <Route path='/pokepage/:nomePokemon' element={<Pokepage />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
