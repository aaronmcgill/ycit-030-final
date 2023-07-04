

const List = () => {

  const options = [1, 2, 4, 5];
  const optionTexts = {
    1: "option 1", 
    2: "second option",
    3: "three", 
    4: "4", 
    5: "Cinq"
  };
  
  let a = Object.values(optionTexts);
//   let a = Object.entries(optionTexts).map((key) => [key, optionTexts[key]]);




const listItems = a.map((x, index) => index !==2 ? <li key={{index}}>{x}</li> : null);
// const listItems = a.map((x) => <li key={`item-${x}`}>{x}</li>);
// const filtered = listItems.filter(key => key !== 3)

  return (
    <>
        <h1>List</h1>
    <ul>
        {listItems}
    </ul>
    </>
  );
};

export default List;