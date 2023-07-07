import React from "react";
import Product from "./Product";
import "../App.css";

const MainRegularTee = (props) => {

  const {products, onAdd} = props;

  return (
    <main>      
      <h1>Regular Cotton T-Shirts</h1>      
      <div className="tee-container">
        {
          products.filter((product) => 
            product.organic === false
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


export default MainRegularTee;
