import React from 'react'
import './list.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

function List({ coin }) {
  return (
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
                    <td className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                    <td className='icon-chip chip-red'><TrendingDownRoundedIcon/></td>
                </td>
            )}
            <td>
                <h3 className='coin-price' style={{color:coin.price_change_percentage_24h<0?"var(--red)":"var(--green)"}}>&#8377;{coin.current_price.toLocaleString(2)}</h3>
            </td>
            <td>
                <p className='total-volume'>Total Volume: {coin.total_volume.toLocaleString()}</p>
            </td>
            <td>
                <p className='total-volume'>Market Cap: &#8377;{coin.market_cap.toLocaleString()}</p>
            </td>
    </tr>
  )
}

export default List