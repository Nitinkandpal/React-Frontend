import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav>
       
       <div>
        <ul ClassName="nav">
          
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/companies">Companies</Link></li>
          <li><Link to="/colleges">Colleges & Universities</Link></li>
       
          </ul>

          <div>
          <ul>

          <Link to="/login">Login</Link>
          <button ClassName='btn'><Link to="/signup">Sign Up</Link></button>
          </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
