import { Header } from './components/header';
import './App.css';
import { PokemonsProvider } from './hooks/pokemonsContext';
import { Cards } from './components/cards';
import { ModalInfo } from './components/modalInfo';
import { Footer } from './components/footer';

function App() {
  return (
    <PokemonsProvider>
      <Header />
      <Cards />
      <ModalInfo />
      <Footer />
    </PokemonsProvider>
  );
}

export default App;