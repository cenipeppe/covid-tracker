import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import SingleCard from './SingleCard'
import moment from 'moment';

const Cards = ({dataApi}) => {
    
    const {confirmed, deaths, recovered, lastUpdate} = dataApi;
    
    return (
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
                Ultimo Aggiornamento: {moment(lastUpdate).format("DD-MMM-YYYY hh:mm")}
            </Typography>
        </div>
    )
}

export default Cards
