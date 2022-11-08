import './App.css';
import { useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/productDetails/ProductScreen';
import UpcomingScreen from './components/upcomingDetails/UpcomingScreen';
import ContactScreen from './components/ContactDetails/ContactScreen';
import EngineScreen from './components/CategoryScreens/EngineScreen';
import SteeringScreen from './components/CategoryScreens/SteeringScreen';
import WheelsScreen from './components/CategoryScreens/WheelsScreen';
import SuspensionScreen from './components/CategoryScreens/SuspensionScreen';
import AccessoriesScreen from './components/CategoryScreens/AccessoriesScreen';
import BrakingScreen from './components/CategoryScreens/BrakingScreen';
import Cart from './components/Cart';
import { Route, Routes, Navigate } from "react-router-dom"


import AuthContext from './store/AuthContext';
import Auth from './components/Auth';
import AllProducts from './components/allProductScreen/AllProducts';

function App() {
  const authCtx = useContext(AuthContext)

  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='products' element={<ProductScreen />} />
          <Route path='upcoming' element={<UpcomingScreen />} />
          <Route path='contact' element={<ContactScreen />} />
          <Route path="engine-mods" element={<EngineScreen />} />
          <Route path='steering-mods' element={<SteeringScreen />} />
          <Route path= 'all-products' element={<AllProducts />} />
          <Route path='wheels' element={<WheelsScreen />} />
          <Route path='suspension-mods' element={<SuspensionScreen />} />
          <Route path='accessories' element={<AccessoriesScreen />} />
          <Route path='brake-mods' element={<BrakingScreen />} />
          <Route path='/auth' element={!authCtx.token ? <Auth/> : <Navigate to='/'/>} />
          <Route path='/cart' element={authCtx.token ? <Cart/> : <Navigate to='/auth'/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
