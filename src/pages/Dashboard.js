import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from "../components/common/Header/navbar.js";
import Grid from "../components/dashboard/grid/grid.js";
import Search from "../components/dashboard/search/search.js";

function Dashboard() {
    const [coins,setCoins] = useState([]);
    const [search, setSearch] = useState("");

    const onSearchChange=(e)=>{
      setSearch(e.target.value)
    }

    var filteredCoins = coins.filter((item)=>
      item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then((response) => {
            console.log("Response>>>",response);
            setCoins(response.data);
        })
        .catch((error) => {
            console.log("Error>>>",error)
        })
    }, []);

  return (
    <div>
        <Header/> 
        <Search search={search} onSearchChange={onSearchChange}/>
        <div className="grid-flex">
          {filteredCoins.length > 0 ? (
            filteredCoins.map((coin, i) => (
              <Grid coin={coin} key={i} delay={(i % 4) * 0.2} />
            ))
          ) : (
            <div>
              <h1 style={{ textAlign: "center" }}>
                Sorry, Couldn't find the coin you're looking for 😞
              </h1>
            </div>
          )}
        </div>
    </div>
  )
}

export default Dashboard