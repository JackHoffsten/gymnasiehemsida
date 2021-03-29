import * as React from 'react';

import * as styles from './AboutPage.scss';

export class AboutPage extends React.Component {
  public render() {
    return (
      <div className={styles.backgroundImage}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ea
          laborum reprehenderit quasi. Cupiditate nulla voluptatum blanditiis
          optio hic dignissimos deserunt dolore cum? Laboriosam alias placeat,
          magnam numquam labore debitis!
        </p>
      </div>
    );
  }
}
