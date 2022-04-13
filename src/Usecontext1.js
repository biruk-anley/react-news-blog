import React from 'react';
import Usecontext2 from './Usecontext2';

{/*  create a context and ppass value with export method */}
export const Usercontext = React.createContext()
export const detailcontext= React.createContext()
function Usecontext1() {
    return (
      <div>
        <Usercontext.Provider value={"KIbur life"}>
          <detailcontext.Provider value={"detail for Kibur life which is nested"}>
            <Usecontext2 />
          </detailcontext.Provider>
        </Usercontext.Provider>
      </div>
    );
}

export default Usecontext1;