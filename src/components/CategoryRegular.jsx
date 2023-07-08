import React from "react";
import Product from './Product';

export default function CategoryRegular(props) {

    const { products, onAdd, searchItem } = props; 

  return (
    <>
      <h2>Category Regular T-Shirt</h2>
        <div className="tee-container">
          {products
            .filter((product) => {
              return searchItem === '' 
              ? product 
              : `${product.color}${product.description}`
              .toLowerCase().includes(searchItem)           
            })
            .filter((product) => product.organic === false)
            .map((product) => (
              <Product
                key={product.id}
                product={product}
                onAdd={onAdd}
              ></Product>
            ))}
        </div>
    </>
  );
}
