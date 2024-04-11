// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import Header from '../components/common/Header/navbar.js'
// import Loader from '../components/common/Loader/loader';
// import { coinObject } from '../functions/convertObject.js';
// import List from '../components/dashboard/list/list.js';
// import CoinInfo from '../components/coin/coinInfo/index.js';

// function CoinPage() {
//     const { id } = useParams();
//     const [isLoading,setIsLoading] = useState(true);
//     const [coinData,setCoinData] = useState();
//     useEffect(()=>{
//         if(id){
//             axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
//         .then((response) => {
//             console.log("Response>>>",response);
//             coinObject(setCoinData,response.data);
//             setIsLoading(false);
//         })
//         .catch((error) => {
//             console.log("Error>>>",error);
//             setIsLoading(false);
//         })
//         }
//     },[id])
//     console.log("Coin Data>>>", coinData);
//   return (
//     <div>
//         <Header/>
//         {isLoading?(
//         <Loader/>
//         ):(
//             <>
//                 <div className='grey-wrapper'>
//                     <List coin={coinData}/>
//                 </div>
//                 <CoinInfo heading={coinData.name} desc={coinData.desc}/>
//             </>
//         )}
//     </div>
//   )
// }

// export default CoinPage


import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/common/Header/navbar.js'
import Loader from '../components/common/Loader/loader';
import { coinObject } from '../functions/convertObject.js';
import { getCoinData } from '../functions/getCoinData.js';
import { getPrices } from '../functions/getPrices.js';
import { convertDate } from '../functions/convertDate.js';
import { settingChartData } from '../functions/settingChartData.js';
import List from '../components/dashboard/list/list.js';
import CoinInfo from "../components/coin/coinInfo/index.js";
import LineChart from "../components/coin/LineChart/index.js";
import SelectDays from "../components/coin/SelectDays/index.js";
import TogglePriceType from '../components/coin/PriceType/index.js';


function CoinPage(){
    const { id } = useParams();
    const [isLoading,setIsLoading] = useState(true);
    const [coinData,setCoinData] = useState();
    const [days, setDays] = useState(30);
    const [chartData, setChartData] = useState({});
    const [priceType, setPriceType] = useState('prices');

    useEffect(() =>{
        if(id){
            getData();
        }
    }, [id]);

    async function getData(){
        const data = await getCoinData(id);
        if(data){
            coinObject(setCoinData,data);
            const prices = await getPrices(id,days,priceType);
            if(prices.length>0){
                settingChartData(setChartData,prices);
                setIsLoading(false);
            }
        }
    }

    const handleDaysChange = async (event) =>{
        setIsLoading(true);
        setDays(event.target.value);
        const prices = await getPrices(id,event.target.value,priceType);
        if(prices.length>0){
            settingChartData(setChartData,prices);
            setIsLoading(false);
        }
    };

    const handlePriceTypeChange = async (event, newType) => {
        setIsLoading(true);
        setPriceType(newType);
        const prices = await getPrices(id,days,newType);
        if(prices.length>0){
            settingChartData(setChartData,prices);
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Header/>
            {isLoading ? (
                <Loader/>
            ) : (
                <>
                    <div className='grey-wrapper'>
                        <List coin={coinData}/>
                    </div>
                    <div className='grey-wrapper'>
                        <SelectDays days={days} handleDaysChange={handleDaysChange}/>
                        <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
                        <LineChart chartData={chartData}/>
                    </div>
                    <CoinInfo heading={coinData.name} desc={coinData.desc}/>
                </>
            )}
        </div>
    );
}

export default CoinPage

