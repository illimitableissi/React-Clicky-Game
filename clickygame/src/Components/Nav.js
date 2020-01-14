import React from 'react';

const Nav = (props) => {
    return (
        <div>
            <nav className="navbar sticky-top navbar-light bg-light">
                <a className="navbar-brand" href="/">Clicky Game</a>
                    <h4>{props.message}</h4>
                    <h4>Score: {props.score}</h4>
                    <h4>Top Score: {props.topScore}</h4>
            </nav>            
        </div>
    );
};

export default Nav;