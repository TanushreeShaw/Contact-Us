import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const FixedContainer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#fff', height: 'auto', width: 'auto' ,"font-size": "small", "font-family": "Segoe UI", "font-weight":"545"}}>
        Our events are open to novice, developers, managers, and organizations who are interested in Google's Technologies or<br/> 
        those who use them as part of their projects.<br/><br/>

        Developer Student Clubs BPPIMT is a prominent student developer community in Eastern India(West Bengal), based out <br/> of BPPIMT campus in Kolkata. 
        The club boasts several members from all over the world.<br/><br/>

        Still having any Questions? Please contact lead@dscbppimt.com
        </Typography>
        
      </Container>
    </React.Fragment>
  );
}

export default FixedContainer;