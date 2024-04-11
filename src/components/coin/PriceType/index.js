import React  from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './styles.css';

export default function TogglePriceType({ priceType, handlePriceTypeChange }) {

  return (
    <div className='toggle-prices'>   
        <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceTypeChange}
        sx={{
            "&.Mui-selected": {
              color: "var(--yellow) !important",
            },
            borderColor: "var(--yellow)",
            border: "unset !important",
            "& .MuiToggleButtonGroup-grouped": {
              border: "1px solid var(--yellow)!important",
              borderColor: "unset",
              color: "var(--yellow) !important ",
            },
            "& .MuiToggleButton-standard": {
              color: "var(--yellow) !important",
            },
          }}
        >
        <ToggleButton value="prices">Price</ToggleButton>
        <ToggleButton value="total_volumes">Total Volume</ToggleButton>
        <ToggleButton value="market_caps">Market Cap</ToggleButton>

        </ToggleButtonGroup>
    </div>
  );
}