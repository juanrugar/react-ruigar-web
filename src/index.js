// #1 Import statements
import React from "react";
import ReactDOM from "react-dom";
import phoenix from './images/phoenix.png';
import eagle from './images/eagle.png';
import panther from './images/panther.png';
import SingleComment from './SingleComment';


//#2 React components
const App = () => {
    return(
       <div className="ui comments">
            <SingleComment 
            name='John' 
            date='Today at 6:00PM' 
            text='Great!' 
            picture={eagle}
            />
            <SingleComment 
            name='Ivanka' 
            date='Today at 2:00PM' 
            text='Wonderful!'
            picture={phoenix}
            />
            <SingleComment 
            name='Sarah' 
            date='Today at 5:00PM' 
            text='OMG...'
            picture={panther}
            />
       </div>
    )
}

// #3 show the component
ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)