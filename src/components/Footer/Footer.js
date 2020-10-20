// **импорты
import React from 'react';
import { Link } from 'react-router-dom';
import githubLogo from '../../images/github.svg';
import facebookLogo from '../../images/facebook.svg';
import './Footer.css';

// **Функционал
function Footer() {
  return (
    <nav className="Footer">
      <p className="Footer__copyright">© 2020 Алексей Акулич, Powered by News API</p>
      <ul>
        <li className="Footer__text-link">
          <Link to='/'>Главная</Link>
        </li>
        <li className="Footer__text-link">
          <Link to='https://praktikum.yandex.ru/' target="blank">Яндекс.Практикум</Link>
        </li>
        <li className="Footer__social-link">
          <Link to='https://github.com//' target="blank">
            <img src={ githubLogo } alt='github' />
          </Link>
        </li>
        <li className="Footer__social-link">
          <Link to='https://facebook.com//' target="blank">
          <img alt='facebook' src={ facebookLogo } />
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default Footer;
