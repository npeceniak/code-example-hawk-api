import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store'
import { Left, Right } from './components/Panels/Panels';

const App: React.FC = () => {
  return (
      <Provider store={store}>
        <div className="App">
            <Left />
            <Right />
        </div>
      </Provider>
  );
}

export default App;
