import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

// class ProductCategoryAccordian extends React.Component {

//   componentDidMount(){
//     fetch("http://localhost:8080/category")
//     .then(data => data.json())
//     .then(json => {
//       this.setState({
//         category: json
//       });

//       console.log(json)
      
//     })
//     .catch(error => {
//       // error network or json handling
//     });
//   }

//   render(){
//     const {classes} = this.props;

//     return(
//       <div className={classes.root}>
//         <ExpansionPanel>
//           <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography className={classes.heading}>Chemical-Free</Typography>
//           </ExpansionPanelSummary>
//             <ExpansionPanelDetails>
//               <List>
//                 {this.state.category.map(category =>(
//                   <ListItem button>
//                     <ListItemText primary={category.name} />
//                   </ListItem>
//                 )
//                 )}
//               </List>
//             </ExpansionPanelDetails>
//         </ExpansionPanel>
//       </div>
//     );
//   }
// }

// // ProductCategoryAccordian.PropTypes = {
// //   classes: PropTypes.objects.isRequired,
// // };

// export default withStyles(styles)(ProductCategoryAccordian);

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Chemical-Free</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List component="nav" className={classes.root}>
            <ListItem button>
              <ListItemText primary="Vegetables" />
            </ListItem>
            {/* <Divider /> */}
            <ListItem button divider>
              <ListItemText primary="Fruits" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Meats" />
            </ListItem>
            {/* <Divider light /> */}
            <ListItem button>
              <ListItemText primary="processed food" />
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Organics</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
