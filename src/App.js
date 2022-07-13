import './App.css';
import {HashRouter,Routes,Route } from 'react-router-dom'
import PageStart from './Components/StartPage/PageStart';
import GamePage from './Components/Game/GamePage';
import {FlagProvider} from './GameData/Function/ContextApi/PlayContext'
import {TimerProvider} from './GameData/Function/ContextApi/TimersContext'
function App() {
  return (
    <div className="App">
      <TimerProvider>
        <FlagProvider>
          <HashRouter>
            <Routes>
              <Route path='/' element={<PageStart/>}/>
              <Route path='game' element={<GamePage/>}/>
            </Routes>
          </HashRouter>
        </FlagProvider>
      </TimerProvider>
    </div>
  );
}

export default App;
