import React from 'react'
import './grid.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

function grid({coin}) {
  return (
    <div className='grid-flex'>
        <div className={`grid-container ${coin.price_change_percentage_24h < 0 && 'grid-container-red'}`}>
            <div className='info-flex'>
                <img src={coin.image} className='coin-logo' alt='coin-logo'/>
                <div className='name-col'>
                    <p className='coin-symbol'>{coin.symbol}</p>
                    <p className='coin-name'>{coin.name}</p>
                </div>
            </div>
            {coin.price_change_percentage_24h > 0 ? (
                <div className='chip-flex'>
                    <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className='icon-chip'><TrendingUpRoundedIcon/></div>
                </div>
            ) : (
                <div className='chip-flex'>
                    <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className='icon-chip chip-red'><TrendingDownRoundedIcon/></div>
                </div>
            )}
            <div className='info-container'>
                <h3 className='coin-price' style={{color:coin.price_change_percentage_24h<0?"var(--red)":"var(--green)"}}>&#8377;{coin.current_price.toLocaleString(2)}</h3>
                <p className='total-volume'>Total Volume: {coin.total_volume.toLocaleString()}</p>
                <p className='total-volume'>Market Cap: &#8377;{coin.market_cap.toLocaleString()}</p>
            </div>
        </div>
    </div>
  )
}

export default grid