import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Pokepage from './pages/pokedex/pokepage';
import Pokedex from './pages/home';

function App() {
  return (
    <BrowserRouter basename= "/hello-world">
      <Routes>
        <Route exact path='/hello-world' element={<Pokedex />}/>
        <Route path='/hello-world/pokepage/:nomePokemon' element={<Pokepage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
