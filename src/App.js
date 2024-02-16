import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Users from './pages/Users'
import Adduser from './pages/Adduser'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='/users/adduser' element={<Adduser></Adduser>}></Route>
      </Routes>
    </>
  );
}

export default App;
