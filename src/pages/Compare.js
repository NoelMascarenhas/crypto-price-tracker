import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header/navbar.js'
import List from '../components/dashboard/list/list.js'
import axios from 'axios'

function Compare() {
    const [coins,setCoins] = useState([]);
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then((response) => {
            console.log("Response>>>",response);
            setCoins(response.data);
        })
        .catch((error) => {
            console.log("Error>>>",error);
        })
    }, []);
  return (
    <div>
        <Header/> 
        <table className='list-table'>
            {coins.map((item,i) => {return <List coin={item} key={i}/>
            })}
        </table>
    </div>
  )
}

export default Compare