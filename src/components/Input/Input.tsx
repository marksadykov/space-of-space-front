import * as React from 'react';

const Input: React.FC = () => {
  const [valueAccessToken, setValueAccessToken] = React.useState<string>('');
  const inputAccessToken = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setValueAccessToken(e.currentTarget.value);
      localStorage.setItem('Access-Token', e.currentTarget.value);
    },
    [setValueAccessToken]
  );

  const [valueProxy, setProxy] = React.useState<string>('');
  const inputProxy = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setProxy(e.currentTarget.value);
      localStorage.setItem('proxy', e.currentTarget.value);
    },
    [setProxy]
  );

  const [valueUsers, setUsers] = React.useState<string>('');
  const inputUsers = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setUsers(e.currentTarget.value);
      localStorage.setItem('users', e.currentTarget.value);
    },
    [setUsers]
  );

  const [valueQuestion, setQuestion] = React.useState<string>('');
  const inputQuestion = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setQuestion(e.currentTarget.value);
      localStorage.setItem('question', e.currentTarget.value);
    },
    [setQuestion]
  );

  const [valueAr, setAr] = React.useState<string>('');
  const inputAr = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setAr(e.currentTarget.value);
      localStorage.setItem('ar', e.currentTarget.value);
    },
    [setAr]
  );

  return (
    <div style={{ marginTop: '48px' }}>
      <div style={{ marginTop: '6px' }}>
        <label>Access-Token:</label>
        <input value={valueAccessToken} onChange={inputAccessToken} />
      </div>

      <div style={{ marginTop: '6px' }}>
        <label>cards, stream, news:</label>
        <input value={valueProxy} onChange={inputProxy} />
      </div>

      <div style={{ marginTop: '6px' }}>
        <label>users:</label>
        <input value={valueUsers} onChange={inputUsers} />
      </div>

      <div style={{ marginTop: '6px' }}>
        <label>question:</label>
        <input value={valueQuestion} onChange={inputQuestion} />
      </div>

      <div style={{ marginTop: '6px' }}>
        <label>arcategory, armodels:</label>
        <input value={valueAr} onChange={inputAr} />
      </div>
    </div>
  );
};

export default Input;
