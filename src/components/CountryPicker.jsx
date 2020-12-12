import React, { useEffect, useState } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'
import { fetchCountries } from '../api'

export default function CountryPicker() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        void (async () => {
            setCountries(await fetchCountries());
        })()
    }, []
    )
    return (
        <FormControl className='formControl'>
            <NativeSelect>
                <option value='global'>Global</option>
                {countries.map(country=>{
                    return (
                    <option key={country.iso3} value='country.iso3'>
                        {country.name}
                    </option>
                )})}
            </NativeSelect>
        </FormControl>
    )
}
