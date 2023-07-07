import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Scart from "./components/Scart";

const RegTeeShirts = (props) => {

  const {products, onAdd, cartItems, onRemove, totalQty} = props;

  return (
    <>
    <Header totalQty={totalQty}/>
    <Nav/>
    <div className="wrapper">
        <Main products={products} onAdd={onAdd} />
        <Scart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
    </div>
    <Footer/>
    </>
  );
};

export default RegTeeShirts;