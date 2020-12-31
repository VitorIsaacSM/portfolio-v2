import React, { CSSProperties, useEffect } from 'react';
import { scrollToId } from '../../utils/consts';
import styles from './home.module.scss';

const Home = () => {

  useEffect(() => {
    (window as any).setVanta()
  });

  return (
    <div id="home" className={styles.home}>
      <p className={styles.mainText}>
        Olá, me chamo <span>Vitor Maia</span>
      </p>
      <p className={styles.subText}>Sou um desenvolvedor Front-end especializado nos mais atuais frameworks de javascript.</p>
      <button className={styles.outlineBtn} onClick={() => scrollToId('about')}>
        Conheça meu trabalho
        <i className="fas fa-arrow-down"></i>
      </button>
    </div>
  );
}

export default Home;