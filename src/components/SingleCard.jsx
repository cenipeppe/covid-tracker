import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'

const SingleCard = ({number, text, color}) => {


    return (
            <div>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color={color} gutterBottom>{text}</Typography>
                        <Typography variant="h5" >
                            <CountUp 
                                start={0}
                                end={number}
                                duration={2}
                                separation="'"
                            />
                        </Typography>
                    </CardContent>
                </Grid>
            </div>
    )
}

export default SingleCard