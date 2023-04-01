import './App.css';
import Home from './components/home'
import Carrusel from './components/carrousel';
import Info from './components/info';
import Personajes from './hooks/personajes';


function App() {
  return (
    <div className="App">
      <Home/>
      <Carrusel/>
      <Info/>
      <Personajes/>

     
    </div>
  );
}

export default App;
