import React from 'react'
import CategoryOrganic from './CategoryOrganic'
import CategoryRegular from './CategoryRegular'

export default function MainHome(props) {

  const { products, onAdd, cartItems } = props;

  return (
    <>
        <main>
        <h1>T-Shirt Home Page</h1>
        <CategoryOrganic
              products={products}
              cartItems={cartItems}
              onAdd={onAdd}
              />
        <CategoryRegular
              products={products}
              cartItems={cartItems}
              onAdd={onAdd}/>
        </main>
    </>
  )
}
