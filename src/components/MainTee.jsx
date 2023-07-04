import "../App.css";
import tData from "../tshirtData";

const MainTee = () => {
  console.log(tData);

  const teeElement = tData.map((tee) => (
    <div className="tee-card">
      <div className="tee" key={tee.id}>
        {tee.color}${tee.price}
        {tee.description}
        <img src={tee.photo} alt="t-shirt" />
      </div>
    </div>
  ));

  return (
    <main>
      <h1>Mens T-Shirt</h1>
      <div className="tee-container">{teeElement}</div>
    </main>
  );
};

export default MainTee;
