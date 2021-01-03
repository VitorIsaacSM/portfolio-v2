import React, { PropsWithoutRef } from 'react';
import styles from './links.module.scss';
//@ts-ignore
import linkedin from '../../assets/resume/linkedin.pdf'

export interface Link {
    className: string;
    url: string;
    download?: string;
}

export const Links = (props: PropsWithoutRef<{alt?: boolean, column?: boolean}>) => {

    const data: Link[] = [
        {
            className: 'fab fa-github',
            url: 'https://github.com/VitorIsaacSM'
        },
        {
            className: 'fab fa-linkedin-in',
            url: 'https://www.linkedin.com/in/vitor-isaac-sitton-maia-11b240174'
        },
        {
            className: 'fab fa-codepen',
            url: 'https://codepen.io/vitorisaacsm'
        },
        {
            className: 'fab fa-whatsapp',
            url: 'https://wa.me/5551995421505'
        },
        {
            className: 'far fa-file-pdf',
            url: linkedin,
            download: 'Currículo - Vitor Maia'
        }
    ]

    const classes = [styles.links, props.alt ? styles.alt : '', props.column ? styles.column : ''].join(' ')

    return (
        <div className={classes}>
            {data.map(link => (
                <a href={link.url} target="_blank" rel="noreferrer" download={link.download} title={link.download} key={link.className}>
                    <i className={link.className}></i>
                </a>
            ))}
        </div>
    )
}