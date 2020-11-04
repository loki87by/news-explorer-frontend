// **импорты
import React from 'react';
import { Link } from 'react-router-dom';
import githubLogo from '../../images/github.svg';
import facebookLogo from '../../images/facebook.svg';
import './Footer.css';
import './styles/__copyright/Footer__copyright.css';
import './styles/__links/Footer__links.css';
import './styles/__text-link/Footer__text-link.css';
import './styles/__text-link/Footer__text-link.css';
import './styles/__social-link/Footer__social-link.css';
import './styles/__social-link/_mobile-position/Footer__social-link_mobile-position.css';

// **Функционал
function Footer() {
  return (
    <footer className="Footer">
      <p className="Footer__copyright">© 2020 Алексей Акулич, Powered by News API</p>
      <ul className="Footer__links">
        <li style={{ listStyle: 'none' }}>
          <Link to='/' className="Footer__text-link">Главная</Link>
        </li>
        <li style={{ listStyle: 'none' }}>
          <a href='https://praktikum.yandex.ru/' className="Footer__text-link" target="blank">Яндекс.Практикум</a>
        </li>
        <li style={{ listStyle: 'none' }}>
          <a href='https://github.com/loki87by' className="Footer__social-link Footer__social-link_mobile-position" target="blank">
            <img src={ githubLogo } alt='github' />
          </a>
        </li>
        <li style={{ listStyle: 'none' }}>
          <a href='https://www.facebook.com/akyla666/' className="Footer__social-link" target="blank">
          <img alt='facebook' src={ facebookLogo } />
          </a>
        </li>
      </ul>
    </footer>
  )
};

// **экспорт
export default Footer;
