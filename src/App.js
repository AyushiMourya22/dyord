
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Context, ContextProvider } from './Context';
import { Home } from './component/Home';

function App() {
  return (
    <ContextProvider>
    <BrowserRouter >

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
