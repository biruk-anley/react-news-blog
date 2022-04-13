import React from 'react';
import { Usercontext,detailcontext } from './Usecontext1';


function UsecontextFinal() {
    return (
        <div>
            <h2>Usecontext</h2>
            <p>this is the contetn which is Grand grand son of App.js after passing the 3 components</p>
            <Usercontext.Consumer>

                {
                    username => {
                        return (
                            <detailcontext.Consumer>
                                {
                                    title => {
                                        return (
                                            <div className="user">
                                                <h5>Passed value  using context is :::</h5><h1>{username} with the second detail of { title}</h1>
                                            </div>
                          );}}
                            
                          </detailcontext.Consumer>
                        );
                    }
                }
            </Usercontext.Consumer>
        </div>
    );
}

export default UsecontextFinal;