import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import ComparePage from "./pages/Compare";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/compare" element={<ComparePage/>}/>
          {/*<Route path="/coin/:id" element={<CoinPage/>}/>
          <Route path="/watchlist" element={<WatchlistPage/>}/>
          */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
