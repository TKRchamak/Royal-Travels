import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        
        <div className="header">
            <h1><Link to='/Home'>Royal Travels</Link></h1>
            <nav>
                <Link to='/Home'>{loggedInUser.displayName}</Link>
                <Link to='/Home'>Home</Link>
                <Link to='/Destination'>Destination</Link>
                <Link to='/Blog'>Blog</Link>
                <Link to='/Contact'>Contact</Link>
                <button className='btn'><Link to='/Login'>Sign In</Link></button>
            </nav>
        </div>
    );
};

export default Header;