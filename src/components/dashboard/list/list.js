import React from 'react'
import './list.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from "react-router-dom";

function List({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className='list-row'>
      <td className='info-flex'>
        <img src={coin.image} className='coin-logo' alt='coin-logo'/>
      </td>
      <td>
        <div className='name-col'>
          <p className='coin-symbol'>{coin.symbol}</p>
          <p className='coin-name'>{coin.name}</p>
        </div>
      </td>
      {coin.price_change_percentage_24h > 0 ? (
        <td className='chip-flex'>
          <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
          <div className='icon-chip'><TrendingUpRoundedIcon/></div>
        </td>
      ) : (
        <td className='chip-flex'>
          <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
          <div className='icon-chip chip-red'><TrendingDownRoundedIcon/></div>
        </td>
      )}
      <td>
        <h3 className='coin-price' style={{color:coin.price_change_percentage_24h<0?"var(--red)":"var(--green)"}}>&#8377;{coin.current_price.toFixed(2)}</h3>
      </td>
      <td>
        <p className='total-volume'>{coin.total_volume}</p>
      </td>
      <td>
        <p className='total-volume'>&#8377;{coin.market_cap}</p>
      </td>
    </tr>
    </Link>
  )
}

export default List
