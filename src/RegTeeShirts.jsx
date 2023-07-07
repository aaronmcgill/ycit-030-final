import Header from "./components/Header";
import Nav from "./components/Nav";
import MainRegularTee from "./components/MainRegularTee";
import Footer from "./components/Footer";
import Scart from "./components/Scart";

const RegTeeShirts = (props) => {

  const {products, onAdd, cartItems, onRemove, onRemoveAll, totalQty} = props;

  return (
    <>
    <Header totalQty={totalQty}/>
    <Nav/>
    <div className="wrapper">
        <MainRegularTee products={products} onAdd={onAdd} />
        <Scart onAdd={onAdd} onRemove={onRemove} onRemoveAll={onRemoveAll} cartItems={cartItems}/>
    </div>
    <Footer/>
    </>
  );
};

export default RegTeeShirts;