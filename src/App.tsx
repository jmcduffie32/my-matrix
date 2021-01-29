import React, { useState } from 'react';
import './App.css';
import Events from './Events';
import Login from './Login';

function App() {
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ creds, setCreds ] = useState({username: '', password: ''});
  (window as any).setLoggedIn = setLoggedIn;

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        {loggedIn ?
        <Events username={creds.username} password={creds.password}/> :
        <Login onLogin={(username: string, password: string) => {
          setCreds({username, password})
          setLoggedIn(true);
        }} />
        }
      </main>
    </div>
  );
}

export default App;
