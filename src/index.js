import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

// Create the anchor point in the MOD that will be used to the render of the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Using the root component of our application that manages the routes: the App component */}
    <App />
  </React.StrictMode>
);



