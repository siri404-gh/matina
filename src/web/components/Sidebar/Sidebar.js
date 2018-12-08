import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import NestedList from '../NestedList/NestedList';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import styles from './styles';
import topics from '../../../../config/topics';

class Sidebar extends React.Component {
  render() {
    const { classes, theme } = this.props;

    const drawer = <div>
      {topics.map((topic, i) => {
        if (typeof topic.route === 'string') {
          return <div key={i}>
            <ListItem component={NavLink} className={classes.listItem} to={topic.route}>
              <ListItemText secondary={topic.topic} className={classes.listItemText} />
            </ListItem>
            <Divider />
          </div>;
        } else if (typeof topic.route !== 'string') {
          return <NestedList key={i} title={topic.topic} links={topic.route} />;
        }
        return null;
      })}
    </div>;

    return (
      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={this.props.mobileOpen}
        onClose={this.props.handleDrawerToggle}
        classes={{ paper: classes.drawerPaper }}
        ModalProps={{ keepMounted: true }} >
        {drawer}
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Sidebar);
