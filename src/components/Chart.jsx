import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { fetchDailyData } from '../api';

const Chart = ({ data, country }) => {
    const [dailyData,setDailyData]= useState([]);

    useEffect(() => {
        void (async () => {
            setDailyData(await fetchDailyData());
        })()
    }, []
    )

    const lineChart = (
        (dailyData.length)
        ?
        <Line
            data={{
                labels: dailyData.map(({date})=>date),
                datasets: [{
                        data: dailyData.map(({ confirmed })=> confirmed),
                        label: 'Confermati',
                        borderColor: '#ffffff',
                        fill: true
                }, {
                        data: dailyData.map(({ recovered }) => recovered),
                        label: 'Ricoveri',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Decessi',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true
                    }] 
            }}
        />
        :
        <CircularProgress />
    )

    const barChart = (data.confirmed)?
    <Bar 
        data={{
            labels: ['Confermati', 'Ricoveri', 'Morti'],
            datasets: [{
                label: 'People',
                backgroundColor: ['#ffffff', 'green', 'red'],
                data: [data.confirmed.value, data.recovered.value, data.deaths.value]
            }]
        }}
        options={{
            legend: {display: false},
            title: { display: true, text: `Stato attuale in ${country}`}
        }}
    />
    : null

    return (
        <div className='Chart'>
            {(country&&country!=='Global') ? barChart : lineChart}
        </div>
    )
}

export default Chart
