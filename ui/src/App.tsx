import React from 'react';
import './App.css';

import AddHawkButton from './components/Hawks/AddHawkButton';
import Filter from './components/Hawks/Filter';
import DisplayContainer from './components/Hawks/DisplayContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <AddHawkButton />
      <Filter />
      <DisplayContainer />
    </div>
  );
}

export default App;
