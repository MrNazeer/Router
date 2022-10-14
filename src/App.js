import './App.css';
import { Menu } from './components/menu/Menu';
import {Sec1} from './components/Cont_1/Sec1';
import {Cont2} from './components/Cont_2/Cont2';
import {Cont3} from './components/Cont_3/Cont3';
import {Cont4} from './components/Cont_4/Cont4';



function App() {
  return (
    <div className="App">
        <Menu />
        <Sec1 />
        <Cont2 />
        <Cont3 />
        <Cont4 />
    </div>
  );
}

export default App;
