import React from 'react';

const UserCard = (props) => {
    return (

        <div className="ui card">
            <div className="image">
                <img src={props.picture} alt="personal avatar"/>
            </div>
            <div className="content">
                <a className="header" href="/">{props.name}</a>
                <div className="meta">
                    <span className="date">{props.join}</span>
                </div>
                <div className="description">
                    {props.children}
                </div>
            </div>
            <div className="extra content">
                <a>
                    <i className="user icon"></i>
                    {props.friends} Friends
                </a>
                <hr></hr>
                <a>
                    <i className="add icon"></i>
                    add Friend
                </a>

            </div>
        </div>

    )
}

export default UserCard;