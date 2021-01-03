import React, { PropsWithChildren, useEffect } from 'react';
import styles from './qualities.module.scss';
import jsIcon from '../../assets/qualities/js.svg';
import agileIcon from '../../assets/qualities/agile.svg'
import analyticsIcon from '../../assets/qualities/analytics.svg'
import responsiveIcon from '../../assets/qualities/responsive.svg'
import testingIcon from '../../assets/qualities/testing.svg'
//@ts-ignore
import Slider from 'react-slick'
import { isPhoneScreen } from '../../utils/consts';

export interface SliderComponent {
  slickNext: () => void;
  slickPrev: () => void;
  slickPlay: () => void;
}

export interface Quality {
  name: string;
  image: string;
  description: string;
}

let slider: SliderComponent = null

const Qualities = (props: PropsWithChildren<{autoplay: boolean}>) => {

  const list: Quality[] = [
    {
      name: 'Engenheiro Javascript',
      image: jsIcon,
      description: 'Especialista na linguagem Javascript e em todos os principais frameworks.'
    },
    {
      name: 'Desenvolvimento Ágil',
      image: agileIcon,
      description: 'Metodologia ágil aplicada na prática, facilitando o trabalho em equipe.'
    },
    {
      name: 'Layout Responsivo',
      image: responsiveIcon,
      description: 'Aplicações construídas para uso em todas as plataformas!'
    },
    {
      name: 'Testes Automátizados',
      image: testingIcon,
      description: 'Utilização das principais ferramentas de testes da atualidade.'
    },
    {
      name: 'Análise de dados',
      image: analyticsIcon,
      description: 'Ampla experiência com ferramentas como Google Analytics e Tag Manager.'
    }
  ]

  const elements = list.map((item, index) => (
    <div key={index} className={styles.item}>
      <img src={item.image} alt="" />
      <p className={styles.title}>{item.name}</p>
      <p className={styles.desc}>{item.description}</p>
    </div>
  ))

  const sliderSettings = {
    dots: false,
    infinite: true,
    // centerMode: true,
    centerPadding: '50px',
    speed: 600,
    autoplay: !!props.autoplay,
    autoplaySpeed: 4000,
    slidesToShow: isPhoneScreen() ? 1 : 3,
    slidesToScroll: 1,
    rows: 1,
    arrows: false
  };

  useEffect(() => {
    if (props.autoplay) slider.slickPlay()
  }, [props.autoplay])

  return (
    <div className={styles.qualities}>
      <i 
        className={['fas fa-angle-left', styles.arrowBack].join(' ')}
        onClick={() => slider.slickPrev()}
      >
      </i>
      <Slider {...sliderSettings} ref={(s: SliderComponent) => slider = s}>
        {elements}
      </Slider>
      <i
        className={['fas fa-angle-right', styles.arrowNext].join(' ')}
        onClick={() => slider.slickNext()}
      >
      </i>
    </div>
  );
}

export default Qualities;