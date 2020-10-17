// **импорты
import React from 'react';
import './Footer.css';

// **Функционал
function Footer() {
  return (
    <nav className="Footer">
      <p className="Footer__copyright">© 2020 Алексей Акулич, Powered by News API</p>
      <ul className="Footer__links">
        <li className="Footer__text-link">
          <a href='#a'>Главная</a>
        </li>
        <li className="Footer__text-link">
          <a href='#a'>Яндекс.Практикум</a>
        </li>
        <li className="Footer__social-link">
          <img src='' alt='github' />
        </li>
        <li className="Footer__social-link">
          <img src='' alt='facebook' />
        </li>
      </ul>
    </nav>
  )
};

export default Footer;
