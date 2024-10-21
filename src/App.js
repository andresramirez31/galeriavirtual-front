import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import NavigationBar from './components/Navigation_Bar';
import AppRoutes from './routes';
import React from 'react';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    
    <Router>

      <NavigationBar/>
      <AppRoutes/>

    </Router>

  );
}

export default App;
