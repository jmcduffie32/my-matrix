import React, { useState } from 'react';

function Login({ onLogin }: { onLogin: (u: string, p: string) => void }) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  function submitLogin(username: string, password: string) {
    onLogin(username, password);
  }

  return (
    <form onSubmit={e => { e.preventDefault() }}>
      <label htmlFor="username">
        Username:
        <input value={username} onChange={e => { setUsername(e.target.value) }} type="text" name="username" id="username" />
      </label>
      <label htmlFor="password">
        Password:
        <input value={password} onChange={e => { setPassword(e.target.value) }} type="password" name="password" id="password" />
      </label>
      <button type="submit" onClick={e => { e.preventDefault(); submitLogin(username, password) }}>Login</button>
    </form>
  );
}

export default Login;