import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from "../components/common/Header/navbar.js";
import TabsComponent from "../components/dashboard/tabs/index.js";
import PaginationComponent from "../components/dashboard/pagination/index.js";
import Search from "../components/dashboard/search/search.js";
import Loader from '../components/common/Loader/loader.js';
import BackToTop from '../components/common/BackToTop/index.js';

function Dashboard() {
    const [coins,setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [paginatedCoins, setPaginatedCoins] = useState([]);

    useEffect(() => {
      // Get 100 Coins
      getData();
    }, []);

    const getData = () => {
      setIsLoading(true);
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
        .then((response) => {
          console.log("RESPONSE>>>", response.data);
          setCoins(response.data);
          setPaginatedCoins(response.data.slice(0, 10));
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("ERROR>>>", error.message);
        });
    };
  
    const handleChange = (e) => {
      setSearch(e.target.value);
      console.log(e.target.value);
    };

    var filteredCoins = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
    );

    const handlePageChange = (event, value) => {
      setPage(value);
      // Value = new page number
      var initialCount = (value - 1) * 10;
      setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
    };

    return (
      <>
          <Header />
          <BackToTop />
          {isLoading ? (
              <Loader />
      ) : (
        <>
          <Search search={search} handleChange={handleChange} />
          <TabsComponent
            coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
    </>
  );
}

export default Dashboard;
