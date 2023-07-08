import Header from "./components/Header";
import Nav from "./components/Nav";
import MainHome from "./components/MainHome";
import Footer from "./components/Footer";
import Scart from "./components/Scart";
// import tData from "./tshirtData"; removed local data file to use api endpoint

const Home = (props) => {
  const { 
    products, 
    onAdd, 
    cartItems, 
    onRemove, 
    onRemoveAll, 
    totalQty, 
    searchItem, 
    searchForItems 
    } = props;

  return (
    <>
      <Header totalQty={totalQty} />
      <Nav />
      <div className="wrapper">
        <MainHome 
          products={products} 
          onAdd={onAdd} 
          searchItem={searchItem}
          searchForItems={searchForItems}
        />
        <Scart
          onAdd={onAdd}
          onRemove={onRemove}
          onRemoveAll={onRemoveAll}
          cartItems={cartItems}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
