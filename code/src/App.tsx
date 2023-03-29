import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Catalog from './pages/catalog/Catalog';

import './style.css';
import Quiz from './pages/quiz/Quiz';
//import Quiz from './pages/quiz/Quiz';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/quiz/:id" element={<Quiz />} />

      </Routes>
    </Router>
  );
}
