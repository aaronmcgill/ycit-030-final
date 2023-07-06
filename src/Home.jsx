import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Scart from "./components/Scart";
// import tData from "./tshirtData"; removed local data file to use api endpoint
import { useState, useEffect } from "react";

const Home = () => {

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        (async function logUserData() {
        try {
            const res = await       
            fetch('http://localhost:3001/products')
            const data = await res.json();
            setProducts(data);
        } 
        catch (error) {
            alert(`The following error was found: ${error}`)        
        }
        })()    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    console.log(products);
    // const [...products]  = prods;

    const onAdd = (product) => {
        const exists = cartItems.find( (x) => x.id === product.id);

        if(exists) {
            setCartItems(
                cartItems.map( (x) => 
                    x.id === product.id ? { ...exists, qty: exists.qty + 1 } : x
                )
            );
        } else {
            setCartItems(
                [...cartItems, { ...product, qty: 1 }]);
        }
    }

    const onRemove = (product) => {
        const exists = cartItems.find( (x) => x.id === product.id);

        if(exists.qty === 1) {
            setCartItems(
                cartItems.filter( (x) => 
                    x.id !== product.id ));
        } else {
            setCartItems(
                cartItems.map( (x) => 
                    x.id === product.id ? { ...exists, qty: exists.qty - 1 } : x
                )
            );
        }
    }

    return (
        <>
        <Header />
        <Nav/>
        <div className="wrapper">
            <Main onAdd={onAdd} products={products}/>
            <Scart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
        </div>
        <Footer/>
        </>
    )
}

export default Home