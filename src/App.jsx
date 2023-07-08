import { Route, Routes } from "react-router-dom";
import RegTeeShirts from "./RegTeeShirts";
import OrganicTeeShirts from "./OrganicTeeShirts";
import Home from "./Home";
import { useState, useEffect } from "react";

function App() {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchItem, setSearchItem] = useState('');


  const totalQty = cartItems.reduce((acc, cartI) => acc + cartI.qty, 0);
    
  const searchForItems = (f) => {
    setSearchItem(f);
  }

  useEffect(() => {
    (async function logUserData() {
      try {
        const res = await fetch("http://localhost:3001/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        alert(`The following error was found: ${error}`);
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAdd = (product) => {
    const exists = cartItems.find((cartItem) => cartItem.id === product.id);

    if (exists) {
      setCartItems(
        cartItems.map((cartItem) =>
        cartItem.id === product.id ? { ...exists, qty: exists.qty + 1 } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exists = cartItems.find((cartItem) => cartItem.id === product.id);

    if (exists.qty === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
        cartItem.id === product.id ? { ...exists, qty: exists.qty - 1 } : cartItem
        )
      );
    }
  };

  const onRemoveAll = (product) => {
    const exists = cartItems.find((cartItem) => cartItem.id === product.id);

    if (exists) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== product.id));
    }
  };


  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onRemoveAll={onRemoveAll}
              totalQty={totalQty}
              searchItem={searchItem}
              searchForItems={searchForItems}
            />
          }
        />
        <Route
          path="/organic-t-shirts"
          element={
            <OrganicTeeShirts
              products={products}
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onRemoveAll={onRemoveAll}
              totalQty={totalQty}
            />
          }
        />
        <Route
          path="/regular-t-shirts"
          element={
            <RegTeeShirts
              products={products}
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onRemoveAll={onRemoveAll}
              totalQty={totalQty}
            />
          }
        />
        {/* MOVED THIS PAGE TO AN ASIDE ! <Route path="/Cart" element={<Cart />} /> */}
      </Routes>
    </>
  );
}

export default App;
