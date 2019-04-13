import React from "react";
import Grid from "@material-ui/core/Grid";
import img_farm from "../image/farm_sample.jpg";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    padding: 10
  },
});
class FarmStoryCard extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
            <Grid item className={classes.root}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 300 }}
                    image={img_farm}
                    title="Farm Story"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Farm Story
                    </Typography>
                    <Typography component="p">
                      Our soil has been farmed for over one hundred and fifty
                      years. Many farmers who came before us cared for this soil
                      and this land. We consider organic farming to be the
                      fountain of youth of soil. Nutrient rich soil produces
                      nutrient rich food. In a country of perceived abundance,
                      people are eating more and more unhealthy food, and our
                      bodies are not getting the vitamins and minerals they
                      need. Healthy soil produces healthy crops and healthy
                      crops produce healthy people. Farming organically and
                      promoting good dietary choices is a privilege. Our land
                      has previously been planted in fruit trees, most recently
                      walnut trees, which were removed in 2006. The soil is a
                      sycamore silty clay loam, with an excellent texture for
                      growing all kinds of vegetables.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
    );
  }
}

export default withStyles(styles)(FarmStoryCard);
