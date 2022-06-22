import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';

import "./css/sb-admin-2.min.css";
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import ForgotPassword from './components/Pages/ForgotPassword';


function App() {
  return (
    <>
    <Routes>
      <Route path='/*' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/changePassword' element={<ForgotPassword/>}/>
    </Routes>
    </>
  );
}

export default App;
