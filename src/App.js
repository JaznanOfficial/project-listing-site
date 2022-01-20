import logo from './logo.svg';
import './App.css';
import Mainpage from './Components/MainPage/Mainpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Mainpage></Mainpage>}></Route>
        <Route path='/admin-login' element={<LoginPage></LoginPage>}></Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
