
import { Grid } from '@material-ui/core';
import React from 'react';
import Rod from '../containers/Rod'
import Selector from '../containers/Selector'

const PlayArea = () => {
    return(
        <Grid>
        <Rod/>
        <Selector/>
        </Grid>

    )   
};

export default PlayArea;