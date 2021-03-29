import * as React from 'react';

import { Link } from 'react-router-dom';

import * as styles from './Footer.scss';

import logo from './logga_gymnasiearbete.svg';

import facebookIcon from './iconfinder_Rounded_Facebook_svg_5282541.svg';
import instagramIcon from './iconfinder_Rounded_Instagram_svg_5282544.svg';
import twitterIcon from './iconfinder_Rounded_Twitter5_svg_5282551.svg';
import youtubeIcon from './iconfinder_Rounded_Youtube3_svg_5282548.svg';

export class Footer extends React.Component {
  public render() {
    return (
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerItem}>
            <h3>EXPLORE</h3>
            <ul>
              <li>
                <a href="">Tattoos</a>
              </li>
              <li>
                <a href="">Artists</a>
              </li>
              <li>
                <a href="">Studios</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <h3>COMPANY</h3>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <h3>LEGAL</h3>
            <ul>
              <li>
                <a href="">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerEnd}>
          <Link className={styles.footerLogo} to="/">
            <img
              className={styles.footerLogoArt}
              src={logo}
              width={30}
              height={40}
            />
            GaddFinder
          </Link>
          <span className={styles.footerCopyright}>&#169; 2021 GaddFinder</span>
          <div className={styles.footerSocial}>
            <a href="">
              <img src={facebookIcon} width={25} height={25} />
            </a>
            <a href="">
              <img src={instagramIcon} width={25} height={25} />
            </a>
            <a href="">
              <img src={twitterIcon} width={25} height={25} />
            </a>
            <a href="">
              <img src={youtubeIcon} width={25} height={25} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
