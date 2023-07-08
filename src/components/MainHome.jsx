import React from 'react'
import CategoryOrganic from './CategoryOrganic'
import CategoryRegular from './CategoryRegular'

export default function MainHome(props) {

  const { 
    products, 
    onAdd, 
    cartItems, 
    searchForItems, 
    searchItem 
  } = props;

  return (
    <>
        <main>
        <h1>T-Shirt Home Page</h1>
        <input
          className="search"
          placeholder="Search Items"
          onChange={ (e) => {
            const fieldEntry = e.target.value.toLowerCase();
            searchForItems(fieldEntry);
          }}
        />
        <CategoryOrganic
              products={products}
              cartItems={cartItems}
              onAdd={onAdd} 
              searchItem={searchItem}
              />
        <CategoryRegular
              products={products}
              cartItems={cartItems}
              onAdd={onAdd} 
              searchItem={searchItem}
              />
        </main>
    </>
  )
}
