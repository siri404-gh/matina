import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import styles from './styles';

class Navbar extends React.Component {
  state = {
    auth: false,
    anchorEl: null,
    value: 0,
  };

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { classes, title = '', tagline = '' } = this.props;
    const { value } = this.state;

    return (
      <AppBar id="bp-navbar" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton color="inherit" className={classes.iconButtonAvatar}>
            <Avatar className={classes.avatar} src={'/img/logo-192.png'} />
          </IconButton>
          {/* <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.props.handleDrawerToggle}
            className={classes.navIconHide}>
            <MenuIcon className={classes.menuIcon} />
          </IconButton> */}
          {/* <Hidden xsDown> */}
          <Typography variant="title" color="textSecondary" className={classes.flex} noWrap>
            {title}
          </Typography>
          {/* <Typography variant="subheading" color="inherit" className={classes.italics} noWrap>
            {tagline}
          </Typography> */}
          {/* </Hidden> */}
          {this.props.tabs && <Hidden smDown implementation="css">
            <Tabs
              value={value}
              onChange={this.handleChange.bind(this)}
              indicatorColor="primary"
              textColor="primary"
              classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}>
              {this.props.tabs.map((tab, i) => <Tab key={i} label={tab} classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />)}
            </Tabs>
          </Hidden>}
          {/* {this.props.search && <div className={classes.googleSearch} dangerouslySetInnerHTML={{ __html: '<gcse:searchbox-only></gcse:searchbox-only>' }} />} */}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Navbar);
