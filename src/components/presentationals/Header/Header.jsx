import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header__link">
        <Link to="/super-heroes">
          Super Heroes
        </Link>
      </div>
      <div className="header__copyright">
        © 2019 MARVEL
      </div>
    </div>
  );
};

export default Header;