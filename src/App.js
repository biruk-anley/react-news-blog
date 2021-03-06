import Navbar from './Navbar';
import Home from './Home';
import Usecontext1 from './Usecontext1';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        
      </div>
        {/*  down below we will see how to get contents from the third child usecontext final..usecontext1--2--3 
            again here we will pass some value from context1 to context final so that it will be shown in app.js 

            :::producer=cotext1
            ...consumer = context final
            
        */}
      <div className="usecontext">
          <Usecontext1/>
      </div>
    </div>
  );
}

export default App;
