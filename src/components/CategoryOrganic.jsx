import React from "react";
import Product from './Product';

export default function CategoryOrganic(props) {

  const { products, onAdd } = props; 

  return (
    <>
      <h2>Category Organic T-Shirt</h2>
      <main>
        <div className="tee-container">
          {products
            .filter((product) => product.organic === true)
            .map((product) => (
              <Product
                key={product.id}
                product={product}
                onAdd={onAdd}
              ></Product>
            ))}
        </div>
      </main>
    </>
  );
}
