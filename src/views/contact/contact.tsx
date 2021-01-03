import React from 'react'
import { Links } from '../../components/links/links';
import styles from './contact.module.scss';

export const Contact = () => {
    return (
        <div className={styles.contact}>
            <p className={styles.pageTitle}>Contato</p>
            <p>
                Gostou do meu trabalho? entre em contato! <br />
                Apesar de empregado, estou sempre aberto à propostas inovadoras.
            </p>
            <p></p>
            <a className={styles.mail} href="mailto:vitor2001bidi@gmail.com">
                Me mande um email
                <i className="far fa-envelope"></i>
            </a>
            <div className={styles.separator}></div>
            <Links />
            <p className={styles.credit}>VITOR ISAAC SITTON MAIA <span>© 2020</span></p>
        </div>
    )
}