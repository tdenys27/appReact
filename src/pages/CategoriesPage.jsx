import { Container } from 'react-bootstrap';

import Catigories from '../components/categories/Categories';


function CategoriesPage() {
	return (
		<div className="categories">
			<Container>
				<Catigories />
			</Container>
		</div>
	)
}

export default CategoriesPage;