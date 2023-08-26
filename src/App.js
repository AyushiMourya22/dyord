
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Context, ContextProvider } from './Context';
import { Home } from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import { DesignOthers } from './pages/DesginOthers';
import { Plan } from './pages/Plan';
import { DesignGroup } from './pages/DEsignGroup';
import { History } from './pages/History';

function App() {
  return (
    <ContextProvider>
    <BrowserRouter >

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/others' element={<DesignOthers/>}/>
        <Route path='/group' element={<DesignGroup/>}/>
        <Route path='/plan' element={<Plan/>}/>
      </Routes>
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
