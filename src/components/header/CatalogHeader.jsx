import { Link } from "react-router-dom";


function CatalogHeader() {
	return (
		<>
			<Link to="/categories/all" className="btn btn-success">Catalog</Link>
		</>
	)
}

export default CatalogHeader;