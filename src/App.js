import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './Components/HomePage';
import DetailsPage from './Components/DetailsPage';

function App() {
  return (
    <div>
      <div className='header'>
        <h1>Social Media App</h1>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;