import { useState } from "react";
import UseStates from "./UseStates";

const Home = () => {
  const [name, setName] = useState("first");
  const [color, setColor] = useState("red");
  
  const fun = () => {
    setName("second");
    setColor("green");
    
    
    
  }
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <p>{color}</p>
      <button onClick={fun}>Click Me</button>
      <UseStates />
    </div>
  );
}
 
export default Home;