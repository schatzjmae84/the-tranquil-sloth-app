import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from './components/HomePage';
import SlothHeader from './components/common/SlothHeader';

function App() {
  return (
    <>
      <SlothHeader />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
