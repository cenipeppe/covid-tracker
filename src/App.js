import React, { useEffect, useState } from 'react'
import Cards from './components/Cards'
import './App.css'
import Header from './components/Header'

const App = () => {
    {/* Ajax API Covid19 con Hook useEffect. Salvo la risposta nello state 'dataApi' */}
    const URL = 'https://covid19.mathdro.id/api'
    const [dataApi, setDataApi] = useState('');
    useEffect( ()=> {
        void (async () => {
            try {
                const res = await (await fetch(URL)).json()

                console.log(res)
                setDataApi(res);
            } catch (err) {
                alert('Si è verificato un errore', err)
            }
        })()
    }, []
    )

    
    return (
        <div>
            <Header />
            <Cards dataApi={dataApi}/>
        </div>
    )
}

export default App
