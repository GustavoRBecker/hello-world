import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Pokepage from './pages/pokedex/pokepage';
import Pokedex from './pages/home';

function App() {
  return (
    <BrowserRouter basename= "https://gustavorbecker.github.io/hello-world/">
      <Routes>
        <Route exact path='/' Component={Pokedex}/>
        <Route path='/pokepage/:nomePokemon' Component={Pokepage}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
