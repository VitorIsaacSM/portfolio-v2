import React, { useState } from 'react';
import Qualities from '../../components/qualities/qualities';
import styles from './about.module.scss';
import profile from '../../assets/images/profile2.jpg';
import Specialties from '../../components/specialties/specialties';
import Experience from '../../components/experience/experience';
import ScrollAnimation from 'react-animate-on-scroll';
import { Links } from '../../components/links/links';

const About = () => {

  const [autoplay, setAutoplay] = useState(false)

  return (
    <div id="about" className={styles.about}>
      <p className={styles.pageTitle}>
        Sobre mim
      </p>
      <ScrollAnimation animateIn="fadeInDown" animateOnce afterAnimatedIn={() => { setAutoplay(true) }}>
        <Qualities autoplay={autoplay}/>
      </ScrollAnimation>
      <div className={styles.info}>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce >
          <div className={styles.links}>
            <Links alt column/>
          </div>
          <div className={styles.bgAlt}></div>
          <img src={profile} alt="profile pic"/>
          <p>Quem sou eu?</p>
          <p>
            Trabalho como desenvolvedor Front-end na <a className={styles.linkStyle} target="_blank" rel="noreferrer" href="https://goclin.com">Goclin</a>.
            Sou um entusiasta das novas tecnologias e frameworks de Javascript.
            Atualmente curso Engenharia de Computação na <a className={styles.linkStyle} target="_blank" rel="noreferrer" href="https://www.pucrs.br/">PUCRS</a>.
          </p>
        </ScrollAnimation>
        <div>
          <ScrollAnimation animateIn="fadeInRight" animateOnce >
            <Specialties />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" animateOnce >
            <Experience />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default About;