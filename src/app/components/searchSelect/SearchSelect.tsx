import React from 'react';
import Typography, { TypographyVariant } from '../typography/Typography';

interface SearchSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const SearchSelect: React.FC<SearchSelectProps> = ({
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <>
      <label htmlFor={label}>
        <Typography variant={TypographyVariant.Body2}>{label}</Typography>
      </label>
      <select
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default SearchSelect;
