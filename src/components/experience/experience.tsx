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
      desc: 'Coordenar e participar do desenvolvimento do Front-end da aplicação, garantindo a qualidade e manentabilidade do código. Trabalhando com Vue.js e muitas outras ferramentas atuais.',
      image: goclin,
      url: 'https://www.goclin.com'
    },
    {
      company: 'Hammer Consult',
      role: 'Desenvolvedor Front-end',
      desc: 'Trabalhei em projetos de grandes empresas nacionais, utilizando principalmente Angular e React. Construi aplicações modernas e multiplataforma, aplicando técnicas de SEO e Google Analytics.',
      image: hammer,
      url: 'https://www.wlgrupo.com/hammer/'
    },
    {
      company: 'DBServer',
      role: 'Desenvolvedor Full-stack',
      desc: 'Desenvolvimento de aplicações web utilizando Java e Angular, aplicando metodologias ágeis, integração contínua, Test Driven Development e Design Patterns.',
      image: db,
      url: 'https://www.dbserver.com.br/'
    }
  ];

  return (
    <div className={styles.experience}>
      <p>Experiência</p>
      <div>
        {list.map(exp => (
          <a href={exp.url} target="_blank" rel="noreferrer" key={exp.url}>
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