import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <ul className='nav-bar'>
                <li><CustomLink to="/">Home</CustomLink></li>
                <li><CustomLink to="/review">Review</CustomLink></li>
                <li><CustomLink to="/blog">Blog</CustomLink></li>
                <li><CustomLink to="/dashboard">Dashboard</CustomLink></li>
                <li><CustomLink to="/contact">Contact</CustomLink></li>
            </ul>
        </div>
    );
};

export default Header;