import React from 'react';
import MainScreen from '../main/main.jsx';

const menuClickHandler = () => {
  getPageURL();
}

const getPageURL = () => {
  switch (location.pathname) {
    case `/`:
      return <MainScreen onMenuClick={menuClickHandler} />;
    case `/hotels`:
      return <Hotels onMenuClick={menuClickHandler} />;
  }
  return <div>Ooops! No such page!</div>
}

const App = () => {
  return <>{getPageURL()}</>;
}

export default App;