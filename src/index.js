// #1 Import statements
import React from "react";
import ReactDOM from "react-dom";
import pin from './images/pin.png';


//#2 React components
const App = () => {
    return(
       <div className="ui comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={pin} alt="profile pic" />
                </a>
                <div className='content'>
                    <a href="/" className="author">
                        Laura
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 6:00 p.m.
                        </span>
                    </div>
                    <div className="text">
                        Congrats!
                    </div>
                </div>
            </div>
       </div>
    )
}

// #3 show the component
ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)