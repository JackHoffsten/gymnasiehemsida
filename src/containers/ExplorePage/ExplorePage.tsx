import * as React from 'react';

import * as styles from './ExplorePage.scss';

import searchIcon from './search_black_24dp.svg';

import { ExploreResult } from 'components/ExploreResult/ExploreResult';

const cities: Map<string, string[]> = new Map<string, string[]>([
  ['sweden', ['Stockholm', 'Göteborg']],
  ['norway', ['Oslo', 'Lofoten']],
  ['denmark', ['Copenhagen', 'Pösle']],
  ['finland', ['Mumindalen', 'Helsingfors']],
  ['iceland', ['Reykjavik', 'Räkavik']],
  ['russia', ['Moskva', 'Vodka']]
]);

const studios: Studio[] = [
  {
    name: 'Jacks Studio',
    website: 'jacksstudio.se',
    street: 'Katarina Bangata 28',
    area: 'Södermalm',
    city: 'Stockholm',
    country: 'Sweden',
    styles: ['Black and gray'],
    employees: ['Jack'],
    rating: 5
  },
  {
    name: 'Evil Studio',
    website: 'evilstudio.com',
    street: 'Evil Street 66',
    area: 'Manhattan',
    city: 'New York',
    country: 'United States of America',
    styles: ['Black and gray', 'New school'],
    employees: ['Jeff', 'Dave', 'Melissa'],
    rating: 4.5
  },
  {
    name: 'Cool Studio',
    website: 'coolstudio.dk',
    street: 'Danska Gatan 32',
    area: 'Copenhaven',
    city: 'Copenhaven',
    country: 'Denmark',
    styles: ['New school', 'Realistic'],
    employees: ['John', 'Björn', 'Malin'],
    rating: 3.8
  },
  {
    name: 'Bad Tattoo Studio',
    website: 'badstudio.no',
    street: 'Norska Gatan 55',
    area: 'Oslo',
    city: 'Oslo',
    country: 'Norway',
    styles: ['Realistic', 'New school'],
    employees: ['Felix', 'Gunnar', 'Camilla'],
    rating: 1.4
  },
  {
    name: 'Scary Tattoo',
    website: 'scarytattoo.is',
    street: 'Isländska Gatan 67',
    area: 'Reykjavik',
    city: 'Reykjavik',
    country: 'Iceland',
    styles: ['New school', 'Black and gray'],
    employees: ['Kaspar', 'Sten', 'Johan'],
    rating: 4.8
  },
  {
    name: 'Bear Tattoo',
    website: 'beartattoo.ru',
    street: 'Vodka Street 40',
    area: 'Moskva',
    city: 'Moskva',
    country: 'Russia',
    styles: ['Black and gray'],
    employees: ['Kasporov', 'Garry', 'Boshka'],
    rating: 4.3
  }
];

export interface Studio {
  name: string;
  website: string;
  street: string;
  area: string;
  city: string;
  country: string;
  styles: string[];
  employees: string[];
  rating: number;
}

interface State {
  searchString: string;
  country: string;
  city: string;
  style: string;
  searchResult: Studio[] | null;
}

export class ExplorePage extends React.Component<{}, State> {
  public constructor() {
    super({});

    this.state = {
      searchString: '',
      country: '',
      city: '',
      style: '',
      searchResult: null
    };

    this.onChangeSearchString = this.onChangeSearchString.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeStyle = this.onChangeStyle.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onKeyDownInput = this.onKeyDownInput.bind(this);
  }

  public render() {
    const { searchString, country, city, style, searchResult } = this.state;
    const selectedCities = cities.get(country) || [];

    return (
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <div className={styles.searchField}>
            <div className={styles.searchFlexBox}>
              <select
                className={styles.dropdown}
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
                className={styles.dropdown}
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
                className={styles.dropdown}
                name="styles"
                id="styles"
                value={style}
                onChange={this.onChangeStyle}
              >
                <option value="">Choose style</option>
                <option value="black and gray">Black-and-gray</option>
                <option value="new school">New school</option>
                <option value="realistic">Realistic</option>
              </select>
              <input
                className={styles.searchBox}
                type="text"
                value={searchString}
                onChange={this.onChangeSearchString}
                onKeyDown={this.onKeyDownInput}
              />
              <button className={styles.searchBtn} onClick={this.onSearch}>
                <img src={searchIcon} />
              </button>
            </div>
            <div className={styles.results}>
              {searchResult && searchResult.length === 0 && (
                <p className={styles.noResults}>No results.</p>
              )}
              {searchResult &&
                searchResult.map(sr => <ExploreResult studio={sr} />)}
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

  public onKeyDownInput(event: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = event;
    if (key === 'Enter') {
      this.onSearch();
    }
  }

  public onSearch() {
    const { city, country, searchString, style } = this.state;
    if (city === '' && country === '' && searchString === '' && style === '') {
      this.setState({ searchResult: [] });
      return;
    }

    let filteredStudios = [...studios];

    if (city !== '') {
      filteredStudios = filteredStudios.filter(
        s => s.city.toLowerCase() === city.toLowerCase()
      );
    }

    if (country !== '') {
      filteredStudios = filteredStudios.filter(
        s => s.country.toLowerCase() === country.toLowerCase()
      );
    }

    if (style !== '') {
      filteredStudios = filteredStudios.filter(
        s => !!s.styles.find(st => st.toLowerCase() === style.toLowerCase())
      );
    }

    if (searchString !== '') {
      const lowerSearchString = searchString.toLowerCase();
      filteredStudios = filteredStudios.filter(s => {
        if (s.name.toLowerCase().includes(lowerSearchString)) {
          return true;
        }

        if (s.website.toLowerCase().includes(lowerSearchString)) {
          return true;
        }

        if (s.street.toLowerCase().includes(lowerSearchString)) {
          return true;
        }

        if (s.area.toLowerCase().includes(lowerSearchString)) {
          return true;
        }

        if (s.city.toLowerCase().includes(lowerSearchString)) {
          return true;
        }

        if (s.country.toLowerCase().includes(lowerSearchString)) {
          return true;
        }

        if (!!s.styles.find(s => s.toLowerCase().includes(lowerSearchString))) {
          return true;
        }

        if (
          !!s.employees.find(e => e.toLowerCase().includes(lowerSearchString))
        ) {
          return true;
        }

        return false;
      });
    }

    this.setState({ searchResult: filteredStudios });
  }
}
