import React from 'react';

import './Header.css';

function Header({question}) {
  
  return(
    <header className='header'>
      <h1>{question}</h1>
    </header>
  );

}

export default Header;
