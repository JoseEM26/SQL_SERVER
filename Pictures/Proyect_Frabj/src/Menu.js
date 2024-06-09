import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { text: 'Especialidades', url: 'Especialidades' },
  { text: 'Milkshakes', url: 'Milkshakes' },
  { text: 'Fraps Tentaciones de Verano', url: 'Frapps' },
  { text: 'Cafes', url: 'Cafe' },
  { text: 'Frozen', url: 'Frozen' },
];

function MenuItem({ text, url, handleClick }) {
  return (
    <li>
      <Link to={`/productos${url}`} className="menu-item" onClick={handleClick}>
        {text}
      </Link>
    </li>
  );
}



function Menu() {
  return (
    <nav id='navegacion' className="navegacion">
      <ul className="menu">
        {menuItems.map((item, index) => (
          <MenuItem
          key={index}
          text={item.text}
          url={item.href}
         
        />
        ))}
      </ul>
    </nav>
  );
}

export default Menu;