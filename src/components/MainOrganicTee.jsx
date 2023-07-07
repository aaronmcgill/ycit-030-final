import React from "react";
import Product from "./Product";
import "../App.css";

const MainOrganicTee = (props) => {

  const {products, onAdd} = props;

  return (
    <main>      
      <h1>Organic Cotton T-shirts</h1>      
      <div className="tee-container">
        {
          products.filter((product) => 
            product.organic === true
          )
          .map((product)=> (
            <Product 
              key={product.id}
              product={product}
              onAdd={onAdd}
            ></Product>
          ))
        }
      </div>
    </main>
  );
};

export default MainOrganicTee;
