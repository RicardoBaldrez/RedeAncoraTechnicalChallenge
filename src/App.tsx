import './App.css';
import RoutesApplication from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <RoutesApplication />
    </BrowserRouter>
  );
}

export default App;
