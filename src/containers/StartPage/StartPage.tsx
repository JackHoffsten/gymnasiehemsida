import * as React from 'react';
import { Link } from 'react-router-dom';

import * as styles from './StartPage.scss';

export class StartPage extends React.Component {
  public render() {
    return (
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <div className={styles.backgroundText}>
            <h2 className={styles.text}>
              We help you explore and find the right studio and artist for your
              tattoos.
            </h2>
            <Link className={styles.exploreText} to="/explore">
              EXPLORE
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
