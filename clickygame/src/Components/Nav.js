import React from 'react';

const Nav = () => {
    return (
        <div>
            <nav className="navbar sticky-top navbar-light bg-light">
                <a className="navbar-brand" href="/">Clicky Game</a>
                    <h4 className="game-message"></h4>
                    <h4>Score:<span className="score"></span></h4>
                    <h4>Total Score:<span className="totalscore"></span></h4>
            </nav>            
        </div>
    );
};

export default Nav;