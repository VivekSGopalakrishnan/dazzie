import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import Orders from './orders/Orders';
import Sidenav from './sidenav/Sidenav';
import Customers from './customers/Customers';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Sidenav />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/orders' element={<Orders />}></Route>
            <Route path='/customers' element={<Customers />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
