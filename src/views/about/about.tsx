import React from 'react';
import Qualities from '../../components/qualities/qualities';
import styles from './about.module.scss';
import profile from '../../assets/images/profile2.jpg';
import Specialties from '../../components/specialties/specialties';
import { Section } from '../../components/Section';
import Experience from '../../components/experience/experience';
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {

  return (
    <div id="about" className={styles.about}>
      <p className={styles.pageTitle}>
        Sobre mim
      </p>
      <ScrollAnimation animateIn="fadeInDown">
        <Qualities/>
      </ScrollAnimation>
      <div className={styles.info}>
        <ScrollAnimation animateIn="fadeInLeft">
          <div className={styles.bgAlt}></div>
          <img src={profile} alt="profile pic"/>
          <p>Quem sou eu?</p>
          <p>
            Trabalho como desenvolvedor Front-end na Goclin.
            Sou um entusiasta das novas tecnologias e frameworks de Javascript.
            Atualmente curso Engenharia de Computação na PUCRS.
          </p>
        </ScrollAnimation>
        <div>
          <ScrollAnimation animateIn="fadeInRight">
            <Specialties />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
            <Experience />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default About;