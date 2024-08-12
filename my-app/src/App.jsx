import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categories from './pages/Categories';
import Info from './pages/Info';
import AddCategories from './pages/AddCategories';
import EditCategory from './pages/EditCategory';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorites from './pages/Favorites'; 
import Basket from './pages/Basket'; 
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/info" element={<Info />} />
          <Route path="/addCategory" element={<AddCategories />} />
          <Route path="/edit/:id" element={<EditCategory />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Provider>
    </div>
  )
}


export default App;
