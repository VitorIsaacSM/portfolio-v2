import React from 'react';
import styles from './experience.module.scss';
import goclin from '../../assets/companies/goclin.png';
import hammer from '../../assets/companies/hammer.png';
import db from '../../assets/companies/db.png';


export interface WorkExperience {
  company: string;
  url: string;
  role: string;
  desc: string;
  image: string;
}

const Experience = () => {

  const list: WorkExperience[] = [
    {
      company: 'Goclin',
      role: 'Head do Front-end',
      desc: 'Coordenar o desenvolvimento de todo o Front-end da aplicação, garantindo a qualidade e manentabilidade do código. Além é claro de desenvolver e também fazer uso de testes unitários e E2E.',
      image: goclin,
      url: 'https://www.goclin.com'
    },
    {
      company: 'Hammer Consult',
      role: 'Desenvolvedor Front-end',
      desc: 'Coordenar o desenvolvimento de todo o Front-End da aplicação, garantindo a qualidade e manentabilidade do código. Além é claro de desenvolver e também fazer uso de testes unitários e E2E.',
      image: hammer,
      url: 'https://www.wlgrupo.com/hammer/'
    },
    {
      company: 'DBServer',
      role: 'Desenvolvedor Full-stack',
      desc: 'Coordenar o desenvolvimento de todo o Front-End da aplicação, garantindo a qualidade e manentabilidade do código. Além é claro de desenvolver e também fazer uso de testes unitários e E2E.',
      image: db,
      url: 'https://www.dbserver.com.br/'
    }
  ];

  return (
    <div className={styles.experience}>
      <p>Experiência</p>
      <div>
        {list.map(exp => (
          <a href={exp.url} target="_blank">
            <img src={exp.image} alt="company logo" />
            <div>
              {/* <p>{exp.company}</p> */}
              <p>{exp.role}</p>
              <p>{exp.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Experience;