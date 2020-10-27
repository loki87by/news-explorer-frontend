// **импорты
import React from 'react';
import { Link } from 'react-router-dom';
import githubLogo from '../../images/github.svg';
import facebookLogo from '../../images/facebook.svg';
import './Footer.css';
import '../../blocks/Footer/__copyright/Footer__copyright.css';
import '../../blocks/Footer/__text-link/Footer__text-link.css';
import '../../blocks/Footer/__text-link/Footer__text-link.css';
import '../../blocks/Footer/__social-link/Footer__social-link.css';

// **Функционал
function Footer() {
  return (
    <nav className="Footer">
      <p className="Footer__copyright">© 2020 Алексей Акулич, Powered by News API</p>
      <ul style={{ display: 'flex', margin: 0, padding: '27px 2px 28px' }}>
        <li style={{ listStyle: 'none' }}>
          <Link to='/' className="Footer__text-link">Главная</Link>
        </li>
        <li style={{ listStyle: 'none' }}>
          <a href='https://praktikum.yandex.ru/' className="Footer__text-link" target="blank">Яндекс.Практикум</a>
        </li>
        <li style={{ listStyle: 'none' }}>
          <a href='https://github.com/loki87by' className="Footer__social-link" target="blank">
            <img src={ githubLogo } alt='github' />
          </a>
        </li>
        <li style={{ listStyle: 'none' }}>
          <a href='https://www.facebook.com/akyla666/' className="Footer__social-link" target="blank">
          <img alt='facebook' src={ facebookLogo } />
          </a>
        </li>
      </ul>
    </nav>
  )
};

export default Footer;
