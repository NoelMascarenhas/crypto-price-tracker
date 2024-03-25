import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from "../components/common/Header/navbar.js";
import Grid from "../components/dashboard/grid/grid.js";

function Dashboard() {
    const [coins,setCoins] = useState([]);
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
        <div className="grid-flex">
          {coins.length > 0 ? (
            coins.map((coin, i) => (
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