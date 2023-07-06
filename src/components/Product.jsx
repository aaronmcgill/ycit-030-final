import React from "react";

export default function Product(props) {
  
  const { product, onAdd } = props;

  return (
    <>
      <div className="tee-card">
        <div className="tee" key={product.id}>
          <img src={product.photo} alt="t-shirt" />
          <div className="product-info">
            <p>Color: {product.color}</p>
            <p><strong>Price: ${product.price}</strong></p>
            <p>{product.description}</p>
          </div>
        </div>
        <button onClick={()=> {onAdd(product)}}>Add to Cart</button>
      </div>
    </>
  );
}
