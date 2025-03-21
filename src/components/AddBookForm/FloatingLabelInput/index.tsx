import { TextInput } from '@mantine/core';
import { useState } from 'react';
import classes from './FloatingLabelInput.module.css';

type Props = {
  label: string;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FloatingLabelInput = ({
  label,
  placeholder,
  required,
  value,
  onChange,
}: Props) => {
  const [focused, setFocused] = useState(false);
  const floating = value.trim().length !== 0 || focused || undefined;

  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      onBlur={() => setFocused(false)}
      onFocus={() => setFocused(true)}
      data-floating={floating}
      labelProps={{ 'data-floating': floating }}
      className={classes}
    />
  );
};

export default FloatingLabelInput;
