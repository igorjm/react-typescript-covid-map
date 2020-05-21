import React from 'react';

import styles from './Chart.module.css';

const Chart: React.FC = () => {
  return (
    <>
      <h4 className={styles.title}>Curva de crescimento do COVID-19</h4>
      <div className={styles.radio}>
        <input
          type='radio'
          name='serie'
          className={styles.confirmed}
          checked={true}
        />
        <label htmlFor='confirmed'>Casos Confirmados</label>
        <input
          type='radio'
          name='serie'
          className={styles.deaths}
          checked={false}
        />
        <label htmlFor='deaths'>Mortes Confirmadas</label>
      </div>
    </>
  );
};

export default Chart;
