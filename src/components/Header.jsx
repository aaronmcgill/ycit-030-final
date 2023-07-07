import "../App.css";

const Header = (props) => {

  const { totalQty } = props;
    return (
      <header>
        <p>Cart</p>
        <div className="cart-counter">{totalQty}</div>
      </header>
    );
  };
  
  export default Header;