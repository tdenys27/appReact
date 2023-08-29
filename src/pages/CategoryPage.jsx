import React from 'react';
import { Container } from 'react-bootstrap';

import Category from '../components/category/Category';


function CategoryPage() {
	return (
		<div className="category">
			<Container>
				<Category />
			</Container>
		</div>
	)
}

export default CategoryPage;