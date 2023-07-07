import Header from "./components/Header";
import Nav from "./components/Nav";
import MainOrganicTee from "./components/MainOrganicTee";
import Footer from "./components/Footer";
import Scart from "./components/Scart";

const OrganicTeeShirts = (props) => {

  const {products, onAdd, cartItems, onRemove, onRemoveAll, totalQty} = props;

  return (
    <>
    <Header totalQty={totalQty}/>
    <Nav/>
    <div className="wrapper">
        <MainOrganicTee products={products} onAdd={onAdd} />
        <Scart onAdd={onAdd} onRemove={onRemove} onRemoveAll={onRemoveAll} cartItems={cartItems}/>
    </div>
    <Footer/>
    </>
    
  );
};

export default OrganicTeeShirts;
