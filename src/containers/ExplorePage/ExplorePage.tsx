import * as React from 'react';

import * as styles from './ExplorePage.scss';

import { ExploreResult } from 'components/ExploreResult/ExploreResult';

const cities: Map<string, string[]> = new Map<string, string[]>([
  ['sweden', ['Stockholm', 'Göteborg']],
  ['norway', ['Oslo', 'Lofoten']],
  ['denmark', ['Köpenhamn', 'Pösle']],
  ['finland', ['Mumindalen', 'Helsingfors']],
  ['iceland', ['Rejkavik', 'Räkavik']],
  ['russia', ['Moskva', 'Vodka']]
]);

interface State {
  searchString: string;
  country: string;
  city: string;
  style: string;
}

export class ExplorePage extends React.Component<{}, State> {
  public constructor() {
    super({});

    this.state = {
      searchString: '',
      country: '',
      city: '',
      style: ''
    };

    this.onChangeSearchString = this.onChangeSearchString.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeStyle = this.onChangeStyle.bind(this);
  }

  public render() {
    const { searchString, country, city, style } = this.state;
    const selectedCities = cities.get(country) || [];

    return (
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <div className={styles.backgroundText}>
            <h1 className={styles.title}>Explore</h1>
            <div className={styles.dropdowns}>
              <select
                name="country"
                id="country"
                value={country}
                onChange={this.onChangeCountry}
              >
                <option value="">Choose country</option>
                <option value="sweden">Sweden</option>
                <option value="norway">Norway</option>
                <option value="denmark">Denmark</option>
                <option value="finland">Finland</option>
                <option value="iceland">Iceland</option>
                <option value="russia">Russia</option>
              </select>
              <select
                name="cities"
                id="cities"
                value={city}
                onChange={this.onChangeCity}
              >
                <option value="">Choose city</option>
                {selectedCities.map(c => (
                  <option value={c}>{c}</option>
                ))}
              </select>
              <select
                name="styles"
                id="styles"
                value={style}
                onChange={this.onChangeStyle}
              >
                <option value="">Choose style</option>
                <option value="black-and-gray">Black-and-gray</option>
              </select>
            </div>
            <div className={styles.searchContainer}>
              <div className={styles.search}>
                <input
                  className={styles.searchBox}
                  type="search"
                  value={searchString}
                  onChange={this.onChangeSearchString}
                />
                <button className={styles.searchBtn}>Search</button>
              </div>
              <div className={styles.results}>
                <ExploreResult />
                <ExploreResult />
                <ExploreResult />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  public onChangeSearchString(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchString: event.currentTarget.value });
  }

  public onChangeCountry(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ country: event.currentTarget.value, city: '' });
  }

  public onChangeCity(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ city: event.currentTarget.value });
  }

  public onChangeStyle(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ style: event.currentTarget.value });
  }
}
