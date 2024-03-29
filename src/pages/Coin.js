import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/common/Header/navbar.js'
import Loader from '../components/common/Loader/loader';
import { coinObject } from '../functions/convertObject.js';
import List from '../components/dashboard/list/list.js';

function CoinPage() {
    const { id } = useParams();
    const [isLoading,setIsLoading] = useState(true);
    const [coinData,setCoinData] = useState();
    useEffect(()=>{
        if(id){
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
            console.log("Response>>>",response);
            coinObject(setCoinData,response.data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log("Error>>>",error);
            setIsLoading(false);
        })
        }
    },[id])
  return (
    <div>
        <Header/>
        {isLoading?(
        <Loader/>
        ):(
            <>
                <div className='grey-wrapper'>
                    <List coin={coinData}/>
                </div>
            </>
        )}
    </div>
  )
}

export default CoinPage