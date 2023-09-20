// #1 Import statements
import React from "react";
import ReactDOM from 'react-dom/client';
import phoenix from './images/phoenix.png';
import eagle from './images/eagle.png';
import panther from './images/panther.png';
import SingleComment from './SingleComment';
import UserCard from "./UserCard";


//#2 React components
const App = () => {
    return (
        <div className="ui comments">
            <UserCard
                name='John'
                join='Joined in 2013'
                picture={eagle}
                description='John is an art director living in New York.'
                friends='22'
            >
                <SingleComment
                    date='Today at 6:00PM'
                    text='Great!'

                />
            </UserCard>

            <UserCard
                name='Ivanka'
                join='Joined in 2012'
                picture={panther}
                description=''
                friends='12'
            >
                <SingleComment

                    date='Today at 2:00PM'
                    text='Wonderful!'

                />
            </UserCard>
            <UserCard
                name='Sarah'
                join='Joined in 2009'
                picture={phoenix}
                description=''
                friends='23'
            >
                <SingleComment

                    date='Today at 5:00PM'
                    text='OMG...'

                />
            </UserCard >
        </div >
    )
}

/* #3 show the component - prior to React 18
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)  */

//#3 render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
