import logo from './logo.svg';
import { Stat } from './components/Stat.tsx';
import { StarGold } from './components/StarGold.tsx';
import { ItemGold } from './components/ItemGold.tsx';
import DropdownProvider from './contexts/DropdownContext.tsx';
import StatProvider from './contexts/StatContext.tsx'

import './App.css';

function App() {
  return (
    <StatProvider>
      <DropdownProvider>
        <div className="App">
          <div className="Input">
            <Stat />
          </div>

          <div className="Output">
            <StarGold />
            <ItemGold />
          </div>
        </div>
      </DropdownProvider>
    </StatProvider>
  );
}

export default App;
