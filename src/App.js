import { Stat } from './components/Stat.tsx';
import { ItemGold } from './components/ItemGold.tsx';
import DropdownProvider from './contexts/DropdownContext.tsx';
import StatProvider from './contexts/StatContext.tsx'
import { Footer } from './components/Footer.tsx';

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
            <ItemGold />
          </div>
        </div>
        <div className="Footer">
          <Footer/>
        </div>
      </DropdownProvider>
    </StatProvider>
  );
}

export default App;
