// here I use use state to see increment and decremment in react js
import { useState, useEffect } from "react";

// lets play with use state

const UseStates = () => {
  // this one is trying to create use state whose current value is 0 and create a function that is used to upadate the varibale named as likedislilke
  let [likedislike, SetNumber] = useState(0);

  // this one is same as the above and it is used to count clikable events
  let [count, Setcounter] = useState(1);

  //method one
  const less = () => {
    SetNumber(likedislike - 1);
  };

  // method two destructuring
  const add = () => {
    SetNumber((reaction) => reaction + 1);
  };

  // this one is an interactive which is changed when a user clikes when post cliked
  let [posts, setpost] = useState("nothing");



  //this one will set up set time  out with use effect and also clean up effect availble

  const[timee, settime]=useState(0)

  // lets play with use effect
  useEffect(() => {
    document.title = ` clikce ${count} times`;
    console.log("useeffect run");
    console.log(count);

    // run after every second
   let timer= setTimeout(() => {   // the variable is used for clean up
      settime((count) => count + 1);
      
    }, 1000);

    // lets clean up
    return () => clearTimeout(timer);


  },); // this one specify which one will be affected ..dependency holder

  return (
    <div>
      <div className="div">
        <button onClick={less}>dislkie</button>
        <span>{likedislike}</span>
        <button onClick={add}>like</button>
      </div>

      {/* let see when a user click the content changes */}
      <button onClick={() => setpost("post clicked")}>Post</button>
      <button onClick={() => setpost("commnet clicked")}>comment</button>
      <h1>{posts}</h1>

      {/*this is method two calling set counter with it and passing the value */}
      <p>the button is clicke {count} times</p>
      <button onClick={() => Setcounter(count + 1)}>counter</button>

      <h4>showing {timee}</h4>
    </div>
  );
};

export default UseStates;
