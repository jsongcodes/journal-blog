// import React from "react";
// import Box from "@material-ui/core/Box";
// import Grid from "@material-ui/core/Grid";
import MoodIcon from "@material-ui/icons/Mood";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import "@fontsource/quicksand";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 450,
    margin: 'auto',
    padding: '50px',
    color: '#fff'
  },
});

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
history.push("/create")
  };

  return (
    <div className="home-class">
      <h2>How are you feeling today?</h2>

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item>
            <SentimentVeryDissatisfiedIcon />
          </Grid>
          <Grid item xs>
            <Slider
              className="continuous-slider"
              value={value}
              onChange={handleChange}
              aria-labelledby="continuous-slider"
            />
          </Grid>
          <Grid item>
            <MoodIcon />
          </Grid>
        </Grid>
      </div>
      <button className="home-class" onClick={handleClick}>
        Journal About It 📝
      </button>
    </div>
  );
};

export default Home;
