import * as React from 'react';
import { Link } from 'react-router-dom';

import * as styles from './StartPage.scss';

export class StartPage extends React.Component {
  public render() {
    return (
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <div className={styles.backgroundText}>
            <h1 className={styles.title}>Welcome</h1>
            <h2 className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse molestie eros in sapien mollis laoreet. Vestibulum
              lobortis hendrerit euismod. Curabitur sit amet velit leo. Aenean
              id ipsum facilisis, varius neque quis, facilisis eros. Phasellus
              id sapien justo. Morbi gravida justo nisi, sed cursus ipsum luctus
              in. Nunc egestas erat eu dui ultrices accumsan.
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
