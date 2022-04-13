import React from 'react';

// import use contex hook
import {useContext} from 'react';
// import UsecontextFinal from './UsecontextFinal';

//importing what we need
import { Usercontext,detailcontext } from './Usecontext1';


//call use context() pass the context as its context
function Usecontext2() {
    const userproduct = useContext(Usercontext)
    const userdetal= Usercontext(detailcontext)
    return (
      <div>
        {/* if it is normal  <UsecontextFinal/> */}
        {/* lets use them  */}
        <div className="holders">
          {userproduct}--{userdetal}
        </div>
      </div>
    );
}

export default Usecontext2;