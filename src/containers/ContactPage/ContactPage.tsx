import * as React from 'react';

import * as styles from './ContactPage.scss';

export class ContactPage extends React.Component {
  public render() {
    return (
      <div className={styles.backgroundImage}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          eligendi culpa unde omnis non ea, nostrum pariatur soluta ab, eveniet
          molestiae! Ut consequuntur tempora inventore! Illo earum unde soluta
          laudantium!
        </p>
      </div>
    );
  }
}
