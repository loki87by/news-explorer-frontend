// **импорты
import React from 'react';
import authorAvatar from '../../images/authorAvatar-min.jpg'
import './About.css';
import '../../blocks/About/__avatar/About__avatar.css';
import '../../blocks/About/__title/About__title.css';
import '../../blocks/About/__text/About__text.css';

// **Функционал
function About() {
  return (
    <section className="About">
      <img className="About__avatar" alt='avatar' src={ authorAvatar } />
      <h1 className="About__title">Об авторе</h1>
      <p className="About__text">Придумать текст</p>
    </section>
  )
};

export default About;
