import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Mainpage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
