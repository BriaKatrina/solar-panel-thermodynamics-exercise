import SimulationWrapper from './components/SimulationWrapper';

import diagram from './assets/diagram.png';
import './App.css';

function App() {
  const simulation = SimulationWrapper()

  return (
    <div className="App">
      <header className="App-header">
        <img src={diagram} className="diagram" alt="logo" />
      </header>
    </div>
  );
}

export default App;
