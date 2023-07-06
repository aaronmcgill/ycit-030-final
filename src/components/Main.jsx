import React from "react";
import Product from "./Product";
import "../App.css";

const Main = (props) => {

  const {products, onAdd} = props;

  return (
    <main>      
      <h1>Home page</h1>      
      <div className="tee-container">
        {
          products.map((product)=> (
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

export default Main;
