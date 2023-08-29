import React from 'react';

import SaleBanner from '../components/sale/SaleBanner';
import SaleForm from '../components/sale/SaleForm';
import CatigoriesCarousel from '../components/categories/CategoriesCarousel';
import SaleProductsCarousel from '../components/sale/SaleProductsCarousel';


function HomePage() {
	return (
		<div className="home">
			<SaleBanner />
			<CatigoriesCarousel />
			<SaleForm />
			<SaleProductsCarousel />
		</div>
	)
}

export default HomePage;