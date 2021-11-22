import * as React from 'react';

const Input: React.FC = () => {
  const [value, setValue] = React.useState<string>('');
  const inputCallback = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
      localStorage.setItem('Access-Token', e.currentTarget.value);
    },
    [setValue]
  );

  return (
    <input
      value={value}
      onChange={inputCallback}
      style={{ marginTop: '48px' }}
    />
  );
};

export default Input;
