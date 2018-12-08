const drawerWidth = 275;

/**
 *
 * @param {string} theme
 * @return {Object}
 */
export default theme => ({
  toolbar: {
    minHeight: 48,
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
    border: 'none',
  },
  listItem: {
    padding: 10,
    paddingLeft: 25,
  },
  activeListitem: {
    // padding: 10,
    paddingLeft: 25,
    backgroundColor: '#e8eaed',
    borderLeft: 'solid 3px blue',
  },
});
