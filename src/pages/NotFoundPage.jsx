import React from 'react';
import { Container } from 'react-bootstrap';

import NotFoundImg from '../ui/images/404.jpg';


function NotFoundPage() {
    return (
		<div className="not-found">
			<Container>
				<img src={NotFoundImg} alt="404" />
			</Container>
		</div>
    )
}

export default NotFoundPage;