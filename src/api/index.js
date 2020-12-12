const URL = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    const url = (country && country!=='Global') ? `${URL}/countries/${country}` : URL;
    try {
        const res = await (await fetch(url)).json()
        return res;
    } catch (err) {
        alert('Si è verificato un errore', err)
    }
}

export const fetchDailyData = async () => {
    try {
        const res = await (await fetch(`${URL}/daily`)).json()
        const arrRes = res.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            recovered: dailyData.recovered.total,
            date: dailyData.reportDate
        }))
        return arrRes;
    } catch (err) {
        alert('Si è verificato un errore', err)
    }
}

export const fetchCountries = async () => {
    try {
        const res = await (await fetch(`${URL}/countries`)).json()
        
        return res.countries;
    } catch (err) {
        alert('Si è verificato un errore', err)
    }
}