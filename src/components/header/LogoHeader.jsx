import { Link } from 'react-router-dom';

import LogoImg from '../../ui/images/logo.png';


function LogoHeader() {
	return (
		<>
			<Link to="/" className="logo">
				<img src={LogoImg} alt="Logo" />
			</Link>
		</>
	)
}

export default LogoHeader;