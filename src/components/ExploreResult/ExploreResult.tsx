import * as React from 'react';

import * as styles from './ExploreResult.scss';

import tempPic from './temppic.jpg';

import tempMap from './tempmap.png';

import { Studio } from 'containers/ExplorePage/ExplorePage';

interface State {
  expanded: boolean;
}

interface Props {
  studio: Studio;
}

export class ExploreResult extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      expanded: false
    };

    this.onClickShowMore = this.onClickShowMore.bind(this);
  }

  public render() {
    const { studio } = this.props;
    const { expanded } = this.state;
    return (
      <div className={styles.box} onClick={this.onClickShowMore}>
        <div className={styles.studioFlex}>
          <div className={styles.studioText}>
            <div>
              <img className={styles.studioImage} src={tempPic} />
            </div>
            <div>
              <h1 className={styles.studioName}>{studio.name}</h1>
              <p>{studio.website}</p>
              <p>
                {studio.street}, {studio.area}, {studio.city}, {studio.country}
              </p>
            </div>
          </div>
          <div>
            <p className={styles.rating}>Rating: {studio.rating}/5</p>
          </div>
        </div>
        {expanded ? <img className={styles.studioMap} src={tempMap} /> : null}
        <div className={styles.showMore}>
          <span className={styles.showMoreText} onClick={this.onClickShowMore}>
            {expanded ? 'Show less' : 'Show more'}
          </span>
        </div>
      </div>
    );
  }

  public onClickShowMore() {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }
}
