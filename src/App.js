import './App.css';
import {HashRouter,Routes,Route } from 'react-router-dom'
import PageStart from './Components/StartPage/PageStart';
import GamePage from './Components/Game/GamePage';
import {FlagProvider} from './GameData/Function/ContextApi/PlayContext'
function App() {
  return (
    <div className="App">
      <FlagProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<PageStart/>}/>
          <Route path='game' element={<GamePage/>}/>
        </Routes>
      </HashRouter>
      </FlagProvider>
    </div>
  );
}

export default App;
