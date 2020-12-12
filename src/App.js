import React, { useEffect, useState } from 'react'
import Cards from './components/Cards'
import Chart from './components/Chart'
import './App.css'
import Header from './components/Header'
import { CircularProgress } from '@material-ui/core'
import { fetchData } from './api'
import CountryPicker from './components/CountryPicker'

const App = () => {

    const [dataApi, setDataApi] = useState('');
    const [country, setCountry] = useState('');

    useEffect( ()=>{
        void (async () => {
            setDataApi(await fetchData());
        })()
    }, []
    )
    const handleCountry= (e)=>{
        e.preventDefault();
        setCountry(e.target.value)
    }
    console.log(country)
    return (
        (dataApi) 
        ?
        <div>
            <Header />
            <Cards dataApi={dataApi}/>
            <CountryPicker 
                handleCountry={handleCountry}
            />
            <Chart className='Chart'/>
        </div>
        :
        <CircularProgress />
    )
}

export default App
