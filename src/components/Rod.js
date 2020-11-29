import React, { Fragment } from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    rod: {
      width: "3%",
      height: "10vh",
      backgroundColor: "red",
      margin: "1em"
    },
}));



const PlayArea = ({number_of_rods, rod_array, game_init, displayGame}) => {

    let rodList = [];
    for (let i = 0; i < number_of_rods; i++){
        rodList.push("rod" + i)
    }

    const handleClick = () => {
        displayGame(rodList)
    };


    const classes = useStyles();
    return(
        <Fragment>
            <Button variant="contained" color="primary"       
                onClick={() => {
                handleClick();
                }}>
                Play
            </Button>

            {game_init && 
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                    {rodList.map(rod => (
                        <Fragment>
                        <Grid className={classes.rod}>{rod} </Grid>
                        </Fragment>
                    ))}
                </Grid>
            }
        </Fragment>
    )
};

export default PlayArea;


// computer_turn: true au click
// if computer turn, button disabled
// + action du computer qui dispatch nouvau tableau et passe computer turn a false + button enabled
// +  un loader