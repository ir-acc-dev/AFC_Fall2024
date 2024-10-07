// foundation
import Child from "./components/Child";


const App = () => {
  let children = ["George", "Janey", "Tonto"];
  let newArray = children.map((kid, index) => {
    return <Child key={index} fname={kid} />;
  });

  return (
    <>
      <h1>My kids are: </h1>
      {newArray}
    </>
    
  );
};


export default App;