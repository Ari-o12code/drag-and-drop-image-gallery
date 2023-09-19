import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import { Provider } from './context/image';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
