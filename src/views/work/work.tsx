import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './work.module.scss'
import goclin from '../../assets/work/goclin2.png';
import inno2b from '../../assets/work/inno2b.png';
import solcbm from '../../assets/work/solcbm.svg';
import nexo from '../../assets/work/nexo.png';

export interface WorkExp {
    name?: string;
    image: string;
    desc: string;
    url: string;
    customClass?: string;
}

export const Work = () => {

    const list: WorkExp[] = [
        {
            name: 'Goclin',
            image: goclin,
            desc: 'A mais inovadora plataforma de saúde e gestão de clínicas hospitalares. Agendamentos, Prontuário eletronico, Controle financeiro e muito mais!',
            url: 'https://goclin.com',
            customClass: 'goclinLogo'
        },
        {
            name: 'Inno2b',
            image: inno2b,
            desc: 'Uma plataforma inovadora, que permite empresas a lançarem desafios, e encontrar o prestador mais qualificado através de um processo de avaliação.',
            url: 'http://www.inno2b.com.br',
            customClass: 'inno2bLogo'
        },
        {
            name: 'Solcbm',
            image: solcbm,
            desc: 'Sistema online de licenciamento do estado do Rio Grande do Sul, uma plataforma que tem como objetivo digitalizar todo o processo de solicitação de alvarás e licencimentos.',
            url: 'https://secweb.procergs.com.br/solcbm'
        },
        {
            name: 'NexoSebrae',
            image: nexo,
            desc: 'Analise os dados do seu negócio e ainda compare com demais empresas do seu setor de atuação! Além disso o Nexo ainda conta com um fórum para os usuários, e notícias em primeira mão para ajudar com seu negócio.',
            url: 'https://nexosebrae.com.br',
            customClass: 'nexoLogo'
        }
    ]

    return (
        <div className={styles.work}>
            <p className={styles.pageTitle}>Meu Trabalho</p>
            <div className={styles.list}>
                {list.map(work => (
                    <ScrollAnimation key={work.name} animateIn="fadeIn" duration={0.5} animateOnce>
                        <div className={[styles[work.customClass], styles.item].join(' ')}>
                            <img src={work.image} alt={work.name}/>
                            <div className={styles.itemInfo}>
                                <p>{work.desc}</p>
                                <a href={work.url} target="_blank" rel="noreferrer">
                                    Visitar Website
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>
        </div>
    )
}