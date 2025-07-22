import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Quiz from './components/Quiz';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Quiz />
      </div>
    </Provider>
  );
}

export default App;
