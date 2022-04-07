// here I use use state to see increment and decremment in react js
import { useState } from "react";

const UseStates = () => {
  // this one is trying to create use state whose current value is 0 and create a function that is used to upadate the varibale named as likedislilke
  let [likedislike, SetNumber] = useState(0);

  // this one is same as the above and it is used to count clikable events
  let [count, Setcounter] = useState(1);

  //method one
  const less = () => {
    SetNumber(likedislike - 1);
  };

  const add = () => {
    SetNumber(likedislike + 1);
  };

  return (
    <div>
      <div className="div">
        <button onClick={less}>dislkie</button>
        <span>{likedislike}</span>
        <button onClick={add}>like</button>
      </div>

      {/*this is method two calling set counter with it and passing the value */}
      <p>the button is clicke {count} times</p>
      <button onClick={() => Setcounter(count + 1)}>counter</button>
    </div>
  );
};

export default UseStates;
