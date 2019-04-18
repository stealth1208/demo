import React from 'react';

const Header = () => {  
  return (
    <div className="header">
      <div className="header__link">
        <a href="/super-heroes">
          Super Heroes
        </a>
      </div>
      <div className="header__copyright">
        © 2019 MARVEL
      </div>
    </div>
  );
};

export default Header;