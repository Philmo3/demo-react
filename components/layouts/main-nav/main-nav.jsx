import React  from 'react';
import { Link } from 'react-router-dom';

import  './main-nav.css'

const MainNav = () => {
    return (
        <div className='MainNav'>
            <div className='MainNav_logo'>Logo</div>
            <ul className='MainNav_links'>
                <li> <Link to='/'>Main Page</Link> </li>
                <li> <Link to='/todos'>Todos Page</Link> </li>
            </ul>
        </div>
    )
}

export default MainNav