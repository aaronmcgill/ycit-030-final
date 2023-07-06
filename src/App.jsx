import { Route, Routes } from "react-router-dom"
import TeeShirts from "./TeeShirts"
import Cart from "./Cart"
import Home from "./Home"



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/t-shirts" element={<TeeShirts/>}/>
      <Route path="/t-shirts/<tId>" element={<TeeShirts/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>    
    </>
  );
}

export default App;
