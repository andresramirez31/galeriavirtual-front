import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import AppRoutes from './routes';

const App = () => {
  return (
    
    <Router>

      <NavigationBar/>
      <AppRoutes/>

    </Router>

  );
}

export default App;
