import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const PastEntries = ({ entries }) => {
  return (
    <div className="entry-list">

      <Container>

        <Grid container spacing={3}>
          {entries.map((entry) => (
            <Grid
              className="past-entries"
              item
              xs={12}
              md={6}
              lg={4}
              key={entry.id}
            >

                <h2>{entry.prompt}</h2>
                <p>Written on {entry.date}</p>
                <p className="body">{entry.body}</p>

            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default PastEntries;
