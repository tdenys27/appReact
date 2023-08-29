import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from '../../pages/HomePage';
import CategoriesPage from '../../pages/CategoriesPage';
import ProductsPage from '../../pages/ProductsPage';
import ProductPage from '../../pages/ProductPage';
import SalePage from '../../pages/SalesProductsPage';
import CartPage from '../../pages/CartPage';
import NotFoundPage from '../../pages/NotFoundPage';
import AboutUsPage from '../../pages/AboutUsPage';
import ContactPage from '../../pages/ContactPage';
import TeamPage from '../../pages/TeamPage';

import HeaderNavbar from '../header/HeaderNavbar';
import CategoryPage from '../../pages/CategoryPage';
import Footer from '../footer/Footer';

import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-promise-loader';
import OurRules from '../../pages/OurRules';


function App() {
    return (
        <div className="wrapper">
            <Router>
                <Loader promiseTracker={usePromiseTracker} />
                <HeaderNavbar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/categories/all' element={<CategoriesPage />} />
                    <Route path='/categories/:id' element={<CategoryPage />} />
                    <Route path='/products/all' element={<ProductsPage />} />
                    <Route path='/products/:id' element={<ProductPage />} />
                    <Route path='/sale' element={<SalePage />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                    <Route path='/about-us' element={<AboutUsPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/team' element={<TeamPage />} />
                    <Route path='/our-rules' element={<OurRules />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
