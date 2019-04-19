import React from 'react';
import PlayerApp from '../PlayerApp';

const Header = () => (
  <div className="header">
    <div className="header__content">
      <div className="header__title">
        <p>Hello World! And so it begins</p>
        <PlayerApp />
      </div>
    </div>
  </div>
);

export default Header;
