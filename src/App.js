import SimulationWrapper from './components/SimulationWrapper';

import diagram from './assets/diagram.png';
import './App.css';

function App() {
  const Simulation = SimulationWrapper(3, 60);

  return (
    <div className="App">
      <header className="App-header">
        <img src={diagram} className="diagram" alt="logo" style={{position: "absolute"}} />
        <Simulation />
      </header>
    </div>
  );
}

export default App;
