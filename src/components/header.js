import React from 'react';
import { Link } from 'react-router-dom';
import './my_styles.css';

const Header = function () {
    return (<div>
        <div className="header">
            <Link className="headerLink" to="/">Home</Link>
            <Link className="headerLink" to="/add">Add note</Link>
    </div>
        <div>
            <h2 className="h2">Notepad App</h2>
        </div>
        <button className="b"> Clear All</button >
    </div>);
}

const styles = {
   
}

export default Header;