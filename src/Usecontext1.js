import React from 'react';
import Usecontext2 from './Usecontext2';

{/*  create a context and ppass value with export method */}
export const Usercontext=React.createContext()
function Usecontext1() {
    return (
        <div>
            <Usercontext.Provider value={"KIbur life"}>
                <Usecontext2/>
            </Usercontext.Provider>
            
        </div>
    );
}

export default Usecontext1;