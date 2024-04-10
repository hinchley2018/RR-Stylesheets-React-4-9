//stylesheet
import './App.css';


function App() {

  
  return (
    <div className="App">
      <h1 className='header'>Welcome to Myrhiam's Flower Business</h1>
      <Flower name="dalia" price={3.87} color={"red"}/>
      <Flower name="sun flower" price={6.5} color={"orange"}/>
      <Flower name="rose" price={1.23} color={"pink"}/>
      <Flower name="daisy" price={5.4} color={"yellow"}/>
    </div>
  );
}
//pre-defined styles
const expensiveStyle = {fontWeight: "500", color: "red", textDecorationLine: "underline"} 
const onSaleStyle = {color: "green"}
const Flower = (props) => (
  <div>
    {/* derived from props */}
    <h2 style={{color: props.color}}>{props.name}</h2>
    {/* based on business logic how to use a pre-defined style */}
    <h4 style={props.price >= 5 ? expensiveStyle : onSaleStyle}>{props.price}</h4>
    {/* or go define them in your stylesheet and use class based styles */}
    <h4 className={props.price >= 5 ? "expensiveStyle" : "onSaleStyle"}>{props.price}</h4>
  </div>
)

export default App;
