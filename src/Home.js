// import React from "react";
// import Box from "@material-ui/core/Box";
// import Grid from "@material-ui/core/Grid";
import MoodIcon from "@material-ui/icons/Mood";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
      width: 450,
    },
  });
  

const Home = () => {
    const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        How are you feeling today?
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <SentimentVeryDissatisfiedIcon />
        </Grid>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <MoodIcon />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
