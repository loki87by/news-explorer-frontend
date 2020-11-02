// **импорты
import React from 'react';
import authorAvatar from '../../images/authorAvatar-min.jpg'
import './About.css';
import './styles/__avatar/About__avatar.css';
import './styles/__title/About__title.css';
import './styles/__text/About__text.css';

// **Функционал
function About() {
  return (
    <section className="About">
      <img className="About__avatar" alt='avatar' src={ authorAvatar } />
      <h1 className="About__title">Об авторе</h1>
      <p className="About__text">Раздолбай, компъютерный гений, и.т.д... Чего я только в свою сторону не слышал, но чтобы я о себе не написал, решать вам, верить моим словам или нет. Так что не стану многословить, судите меня по тому, что я делаю.</p>
    </section>
  )
};

export default About;
