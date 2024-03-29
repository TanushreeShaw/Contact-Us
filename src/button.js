import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      
    },
    
  },
}));

const ContainedButtons = () => {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
      <Button variant="contained">#dscbppimt</Button>
      <Button variant="contained">#dsc</Button>
      <Button variant="contained">#dscindia</Button>
      
    </div>
  );
}

export default ContainedButtons;
