import React from "react";
import ReactDOM from "react-dom/client";

/* functional component
const App = () => {

    //This is HTML Geolocation API; check Mozilla MDN, ws3Schools
    window.navigator.geolocation.getCurrentPosition(
        //always needs 2 args: success and error
        (position)=> console.log(position),
        (error) => console.log(error)
    );

    return (
        <div>
            A brand new app on the way!
        </div>
    )
}
*/

//Class-based component

class App extends React.Component{
    render() {
        window.navigator.geolocation.getCurrentPosition(
            //always needs 2 args: success and error
            (position)=> console.log(position),
            (error) => console.log(error)
        );
        return (
            <div>
                User is located here 
            </div>
        )
    }
}


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

/* Older, alternate render instance
ReactDOM.render(
    <App />,
    document.querySelector('#root')
) 
*/