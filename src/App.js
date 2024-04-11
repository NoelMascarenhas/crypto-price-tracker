import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import CoinPage from './pages/Coin';
import WatchlistPage from './pages/Watchlist';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/coin/:id" element={<CoinPage/>}/>
          <Route path="/watchlist" element={<WatchlistPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
