import React from 'react';

const Product = ({product, toggleEditing, editing}) => {

  if(Object.keys(product).length < 1) {
    return(<div>Loading...</div>)
  }

  const { name, description, data: { imageUrl, price, category } } = product;
  return(
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={imageUrl} alt='Product' />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {name}
          <i className="material-icons right">more_vert</i>
        </span>
        <p><a href='#' onClick={toggleEditing}>{ editing ? 'Cancel Edit' : 'Edit Product'}</a></p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          ${price}
          <i className="material-icons right">close</i>
        </span>
        <p>Category: {category}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
// product = Object {product_id: 12, description: "Its a brand new macbook yo!", name: "Macbook", data: Object, api_key: "taylorwu21@gmail.com"…}
export default Product;
