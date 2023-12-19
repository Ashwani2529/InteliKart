import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopTrending from './components/TopTrending';
function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
          <Route path="/" element={<TopTrending />} />
          
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
