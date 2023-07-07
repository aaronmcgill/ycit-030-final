import React from "react";
import Product from './Product';

export default function CategoryRegular(props) {

    const { products, onAdd } = props; 

  return (
    <>
      <h2>Category Regular T-Shirt</h2>
      <main>
        <div className="tee-container">
          {products
            .filter((product) => product.organic === false)
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
