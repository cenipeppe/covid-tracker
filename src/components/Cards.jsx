import React from 'react'
import { Grid, CircularProgress, Typography } from '@material-ui/core'
import SingleCard from './SingleCard'

const Cards = ({dataApi}) => {
    
    const {confirmed, deaths, recovered, lastUpdate} = dataApi;

    return (
        (dataApi) ?
        <div>
            <Grid container space={3} justify="center" >
                <SingleCard number={confirmed.value} text="Confermati" color="textPrimary" />
                <SingleCard number={recovered.value} text="Ricoveri" color="textSecondary" />
                <SingleCard number={deaths.value} text="Decessi" color="error" />
            </Grid>
            <Typography 
                color="textSecondary" 
                align="center" 
                gutterBottom
            >
                Ultimo Aggiornamento: {lastUpdate}
            </Typography>
        </div>
        :
        <CircularProgress />
    )
}

export default Cards
