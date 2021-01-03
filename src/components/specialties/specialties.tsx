import React from 'react';
import styles from './specialties.module.scss';
import angular from '../../assets/specialties/angular.png';
import react from '../../assets/specialties/react.png';
import vue from '../../assets/specialties/vue.png';
import html from '../../assets/specialties/html5.png';
import js from '../../assets/specialties/js.png';
import ts from '../../assets/specialties/ts.png';
import sass from '../../assets/specialties/sass.png';

export interface Specialty {
  icon: string,
  name: string,
  url: string,
}

const Specialties = () => {

  const list: Specialty[] = [
    {
      icon: angular,
      name: 'Angular',
      url: 'https://angular.io/'
    },
    {
      icon: react,
      name: 'React',
      url: 'https://pt-br.reactjs.org/'
    },
    {
      icon: vue,
      name: 'Vue',
      url: 'https://vuejs.org/'
    },
    {
      icon: js,
      name: 'Javascript',
      url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
    },
    {
      icon: ts,
      name: 'Typescript',
      url: 'https://www.typescriptlang.org/'
    },
    {
      icon: sass,
      name: 'Sass',
      url: 'https://sass-lang.com/'
    },
    {
      icon: html,
      name: 'HTML5',
      url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5'
    }
  ]

  return (
    <div className={styles.specialties}>
        <p>Especialidades</p>
        <div className={styles.list}>
          {list.map((sp, index) => (
            <a href={sp.url} target="_blank" rel="noreferrer" key={index}>
              <img src={sp.icon} alt={sp.name} />
            </a>
          ))}
        </div>
    </div>
  );
}

export default Specialties;