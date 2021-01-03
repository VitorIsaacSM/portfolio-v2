import React, { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './projects.module.scss';

export interface GithubProject {
    name: string
    description: string;
    homepage: string;
    html_url: string;
}

let allProjects: GithubProject[] = [];
let amountToShow = 6;

export const Projects = () => {

    const [projects, setProjects] = useState<GithubProject[]>([])

    const showMore = (number: 3) => {
        setProjects(allProjects.slice(0, projects.length + number))
        requestAnimationFrame(() => window.scrollTo({top: window.scrollY + 200, behavior: 'smooth'}))
    }

    useEffect(() => {
        fetch('https://api.github.com/users/vitorIsaacSM/starred?direction=desc&sort=updated').then(async (res) => {
            allProjects = await res.json() 
            setProjects(allProjects.slice(0, amountToShow))
        })
    }, [])

    return (
        <div className={styles.projects}>
            <p className={styles.pageTitle}>Projetos</p>
            <div className={styles.grid} id="projects-grid">
                {
                    projects.map(project => (
                        <ScrollAnimation animateIn="fadeIn" animateOnce key={project.html_url}>
                            <div className={styles.project}>
                                <div className={styles.header}>
                                    <i className="far fa-folder-open"></i>
                                    <div>
                                        <a href={project.html_url} target="_blank" rel="noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        {project.homepage 
                                            ? (<a href={project.homepage} target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>)
                                            : null
                                        }
                                    </div>
                                </div>
                                <p className={styles.title}>{project.name}</p>
                                <p className={styles.desc}>{project.description}</p>
                            </div>
                        </ScrollAnimation>
                    ))
                }
            </div>
            { projects.length < allProjects.length 
                ? <p className={styles.linkStyle} onClick={() => showMore(3)}>Mostrar Mais</p> 
                : <a href="https://github.com/VitorIsaacSM" target="_blank" rel="noreferrer" className={styles.linkStyle}><p>Lista completa de projetos</p></a>
            }
        </div>
    )
}