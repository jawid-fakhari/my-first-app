import styled from './navbar.module.css';
import { Link } from 'react-router-dom';
import data from '../../pages/home/db';

function Navbar() {
    return (
        <div className={styled.navBarWrapper}>
            <div className="container">
                <div className={styled.navbar}>
                    <div className={styled.logo}>
                        <img src={data.logo.positive} alt="jawid fakhari" />
                    </div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Me</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;