import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
    const { classes, title = '', tagline = '', hideMenu = false } = this.props;
    // const { auth, anchorEl } = this.state;
    // const open = Boolean(anchorEl);

    return (
      <AppBar id="bp-navbar" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          {!hideMenu && <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.props.handleDrawerToggle}
            className={classes.navIconHide}>
            <MenuIcon className={classes.menuIcon} />
          </IconButton>}
          <Typography variant="title" color="textSecondary" className={classes.flex} noWrap>
            {title}
          </Typography>
          <Typography variant="subheading" color="inherit" className={classes.italics} noWrap>
            {tagline}
          </Typography>
          {/* <Hidden smUp>
            <div className={classes.googleSearch} dangerouslySetInnerHTML={{ __html: '<gcse:searchbox-only></gcse:searchbox-only>' }} />
          </Hidden> */}
          {/* {auth &&
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu.bind(this)}
                color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => this.handleClose()}>
                <MenuItem onClick={this.handleClose.bind(this)}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose.bind(this)}>My account</MenuItem>
              </Menu>
            </div>
          } */}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Navbar);
