import React from 'react';
import './App.css';

import AddHawkButton from './components/Hawks/AddHawkButton/AddHawkButton';
import Filter from './components/Hawks/Filter/Filter';
import DisplayContainer from './components/Hawks/DisplayContainer/DisplayContainer';
import Details from './components/Hawks/Details/Details';

const App: React.FC = () => {
  return (
    <div className="App">
      <AddHawkButton />
      <Filter />
      <div>
        <DisplayContainer />
        <Details />
      </div>
    </div>
  );
}

export default App;
