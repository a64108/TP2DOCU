import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Serviços',
    Svg: require('@site/static/img/servicos.svg').default,
    description: (
      <>
       OFICINA WINRAR, foi criada para ter o melhor serviço possivel. Um conjunto de possibilidades para a sua satisfação.
      </>
    ),
  },
  {
    title: 'Cortesia',
    Svg: require('@site/static/img/cortesia.svg').default,
    description: (
      <>
        Viaturas de cortesia para substituição do seu veículo, ou aluguer. <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Recrutamento',
    Svg: require('@site/static/img/recrutamento.svg').default,
    description: (
      <>
       Desejamos recrutar pessoas qualificadas para fazerem parte da nossa empresa, e evoluirem com a mesma.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
