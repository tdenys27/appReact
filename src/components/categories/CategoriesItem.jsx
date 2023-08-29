import React from 'react';
import { Link } from 'react-router-dom';

function CategoriesItem(props) {
    return (
        <>
            <Link to={`/categories/${props.id}`} className="category-img">
                <img src={props.image} alt={props.title} />
            </Link>
            <Link to={`/categories/${props.id}`} className="category-name">
                {props.title}
            </Link>
        </>
    )
}

export default CategoriesItem;