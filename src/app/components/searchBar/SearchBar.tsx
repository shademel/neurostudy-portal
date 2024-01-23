import { useState } from 'react';
import dropdownOptions from './searchOptionsData.json';
import styles from './searchBar.module.css';
import Typography, { TypographyVariant } from '../typography/Typography';
import Search from '../../images/Search.svg';
import ActionButton from '../buttons/ActionButton';

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [neurotype, setNeurotype] = useState<string>('');
  const [courseOptions, setCourseOptions] = useState<string>('');
  const [locations, setLocations] = useState<string>('');

  const handleSearchSubmit = () => {
    console.log('Selected Neurotype:', neurotype);
    console.log('Selected Course Options:', courseOptions);
    console.log('Selected Locations:', locations);
  };

  return (
    <div className={styles.container}>
      <div className={styles.dropdownGroup}>
        <label htmlFor='neurotype'>
          <Typography variant={TypographyVariant.Body2}>
            What is your neurotype?
          </Typography>
        </label>
        <select
          value={neurotype}
          onChange={(e) => setNeurotype(e.target.value)}
        >
          {dropdownOptions.neurotype.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.dropdownGroup}>
        <label htmlFor='courseOptions'>
          <Typography variant={TypographyVariant.Body2}>
            What do you want to study?
          </Typography>
        </label>
        <select
          value={courseOptions}
          onChange={(e) => setCourseOptions(e.target.value)}
        >
          {dropdownOptions.courseOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.dropdownGroup}>
        <label htmlFor='locations'>
          <Typography variant={TypographyVariant.Body2}>
            Where do you want to study?
          </Typography>
        </label>
        <select
          value={locations}
          onChange={(e) => setLocations(e.target.value)}
        >
          {dropdownOptions.locations.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.searchButtonWrapper}>
        <ActionButton
          label='Search'
          icon={Search}
          disabled={false}
          onClick={handleSearchSubmit}
        />
      </div>
    </div>
  );
};

export default SearchBar;
