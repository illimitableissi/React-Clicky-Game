import React from 'react';
import './index.css'

const Nav = (props) => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-dark bg-dark">
                <a className="navbar-brand" href="/">React Clicky Game</a>
                    <h4 className="message animated infinite pulse">{props.message}</h4>
                    <h4 className="scores">Score: {props.score} | Top Score: {props.topScore}</h4>
            </nav>            
        </div>
    );
};

export default Nav;