import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    textColor: "#2f5f02"
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class ProductCategoryMenu extends React.Component {
  state = {
    open: true,
    categorys: []
  };
  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  componentDidMount() {
    fetch("http://localhost:8000/items/MainMenu/")
      .then(data => data.json())
      .then(json => {
        this.setState({
          categorys: json
        });
        // console.log(json)
      })
      .catch(error => {
        // error network or json handling
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <List component="nav" className={classes.root}>
        {this.state.categorys.map(cat => (
          <div key={cat.id} item>
            <ListItem button>
              <ListItemText inset primary={cat.div_name} />
            </ListItem>
            {/* <ProductCard
              product={product}
              plusDidClick={this.plusDidClick}
              removeDidClick={this.removeDidClick}
              onOpenCheckoutModalClick={this.handleOpenCheckoutModalClick}
            /> */}
          </div>
        ))}
        {/* <ListItem button>
          <ListItemText inset primary="Drafts" />
        </ListItem>
        <ListItem button onClick={this.handleClick}>
          <ListItemText inset primary="Inbox" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="Starred" />
            </ListItem>
          </List>
        </Collapse> */}
      </List>
    );
  }
}

ProductCategoryMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCategoryMenu);
