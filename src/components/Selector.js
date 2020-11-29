import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Selector = ({selected_rods, selectNumberOfRod}) => {
  const classes = useStyles();

let numberOfRod = 0;

  const handleChange = (event) => {
   numberOfRod = event.target.value;
    // selectNumberOfRod(parseInt(numberOfRod, 10))
  };

  const handleClick = () => {
     selectNumberOfRod(parseInt(numberOfRod, 10))
   };



  return (
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Select</InputLabel>
        <Select
          native
          value={selected_rods}
          onChange={handleChange}
        >
          <option aria-label="None" value="" />
          <option value={1}>one</option>
          <option value={2}>two</option>
          <option value={3}>three</option>
        </Select>

        <Button variant="contained" color="primary"       
        onClick={() => {
        handleClick();
        }}>
        Valid
    </Button>
      </FormControl>
  );
}

export default Selector;
