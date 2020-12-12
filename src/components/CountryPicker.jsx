import React from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'

export default function CountryPicker() {
    return (
        <FormControl className='formControl'>
            <NativeSelect>
                <option value='global'>Global</option>
            </NativeSelect>
        </FormControl>
    )
}
