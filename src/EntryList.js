import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const EntryList = ({ entries }) => {
  return (
    <div className="entry-list">
      <Container>
        <Grid container spacing={3}>
          {entries.map((entry) => (
            <Grid
              className="entry-preview"
              item
              xs={12}
              md={6}
              lg={4}
              key={entry.id}
            >
              <Link to={`/entries/${entry.id}`}>
                <h2>{entry.prompt}</h2>
                <p>Written on {entry.date}</p>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default EntryList;
