import * as React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import * as styles from './Navbar.scss';

import logo from './logga_gymnasiearbete.svg';

interface Props extends RouteComponentProps {}

class NavbarComp extends React.Component<Props> {
  public render() {
    const hash = location.hash;

    return (
      <div className={styles.navbar}>
        <div className={styles.container}>
          <Link className={styles.logo} to="/">
            <img className={styles.logoArt} src={logo} width={45} height={60} />
            GaddFinder
          </Link>
          <nav>
            <ul className={styles.pages}>
              <li>
                <Link
                  className={
                    hash === '#/' ? styles.activeNavlink : styles.navlink
                  }
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={
                    hash === '#/explore' ? styles.activeNavlink : styles.navlink
                  }
                  to="/explore"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  className={
                    hash === '#/about' ? styles.activeNavlink : styles.navlink
                  }
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={
                    hash === '#/contact' ? styles.activeNavlink : styles.navlink
                  }
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export const Navbar = withRouter(NavbarComp);
