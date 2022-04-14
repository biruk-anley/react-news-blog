import React from "react";
import Usecontext2 from "./Usecontext2";

export const Usercontext = React.createContext();
export const detailcontext = React.createContext();
function Usecontext1() {
  return (
    <div>
      <Usercontext.Provider value={"renderd using use context KIbur life for "}>
        <detailcontext.Provider
          value={
            "detail for use context of  Kibur life which is nested is this"
          }
        >
          <Usecontext2 />
        </detailcontext.Provider>
      </Usercontext.Provider>
    </div>
  );
}

export default Usecontext1;
