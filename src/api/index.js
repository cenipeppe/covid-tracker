const URL = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    try {
        const res = await (await fetch(URL)).json()
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

export const countries = async () => {
    try {
        const res = await (await fetch(`${URL}/countries`)).json()
        
        return res;
    } catch (err) {
        alert('Si è verificato un errore', err)
    }
}