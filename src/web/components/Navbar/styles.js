/**
 *
 * @param {string} theme
 * @return {Object}
 */
export default theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#8c8c8c',
    backgroundColor: '#ffffff',
  },
  toolBar: {
    minHeight: 1,
    marginLeft: window.innerWidth < 600 ? -20 : -10,
  },
  menuIcon: {
  },
  navIconHide: {
    // [theme.breakpoints.up('md')]: {
    //   display: 'none',
    // },
  },
  flex: {
    flexGrow: 1,
  },
  italics: {
    fontStyle: 'italic',
  },
  tabsRoot: {
    'marginLeft': theme.spacing.unit * 5,
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    'textTransform': 'initial',
    'minWidth': 72,
    'marginRight': theme.spacing.unit * 3,
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  googleSearch: {
    minWidth: 300,
    maxWidth: 400,
    marginTop: 3,
    // marginLeft: -5,
  },
});
