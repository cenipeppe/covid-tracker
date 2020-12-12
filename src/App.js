import React, { useEffect, useState } from 'react'
import Cards from './components/Cards'
import Chart from './components/Chart'
import './App.css'
import Header from './components/Header'
import { CircularProgress } from '@material-ui/core'
import { fetchData } from './api'

const App = () => {

    const [dataApi, setDataApi] = useState('');
    useEffect( ()=>{
        void (async () => {
            setDataApi(await fetchData());
        })()
    }, []
    )

    return (
        (dataApi) 
        ?
        <div>
            <Header />
            <Cards dataApi={dataApi}/>
            <Chart className='Chart'/>
        </div>
        :
        <CircularProgress />
    )
}

export default App
