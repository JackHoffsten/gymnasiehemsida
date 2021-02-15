import * as React from 'react';

import * as styles from './ExploreResult.scss';

interface State {
  expanded: boolean;
}

export class ExploreResult extends React.Component<{}, State> {
  public constructor() {
    super({});

    this.state = {
      expanded: false
    };

    this.onClickShowMore = this.onClickShowMore.bind(this);
  }

  public render() {
    const { expanded } = this.state;
    return (
      <div className={styles.box}>
        <h1 className={styles.studioName}>Studio</h1>
        <p>bla bla bla</p>
        {expanded ? (
          <div>
            <h1>hda</h1>
            <h1>hda</h1>
            <h1>hda</h1>
          </div>
        ) : null}
        <button className={styles.showMore} onClick={this.onClickShowMore}>
          {expanded ? 'Show less' : 'Show more'}
        </button>
      </div>
    );
  }

  public onClickShowMore() {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }
}
