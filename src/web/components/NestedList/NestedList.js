import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import { NavLink } from 'react-router-dom';
import styles from './styles';

class NestedList extends React.Component {
  state = {
    open: false,
  };

  componentDidMount() {
    const { open } = this.props;
    if (open) this.setState(state => ({ open: !state.open }));
  }

  handleClick() {
    this.setState(state => ({ open: !state.open }));
  }

  render() {
    const { classes } = this.props;
    return (
      <List component="nav" className={classes.list}>
        <ListItem className={classes.listItem} button onClick={() => this.handleClick()}>
          <ListItemText className={classes.listItemText} secondary={`${this.props.title} (${this.props.links.length})`} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" className={classes.nestedList} disablePadding>
            {this.props.links.map((link, i) => {
              return <ListItem key={i} component={NavLink} className={classes.nestedListItem} to={link.route}>
                <ListItemText secondary={link.topic} className={classes.nestedListItemText}/>
              </ListItem>;
            })}
          </List>
        </Collapse>
        <Divider />
      </List>
    );
  }
}

export default withStyles(styles)(NestedList);
