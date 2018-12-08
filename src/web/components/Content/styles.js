/**
 *
 * @param {string} theme
 * @return {Object}
 */
export default theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2,
    wordBreak: 'break-word',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.background.primary,
    padding: 0,
  },
  toolbar: {
    minHeight: 48,
  },
  markdown: {
    padding: `${theme.spacing.unit * 0}px 0`,
  },
  contentLeft: {
    // paddingRight: 15,
    color: 'green',
    overflow: 'hidden',
  },
  contentRight: {
    // borderLeft: ' solid 1px #ecf0f2',
    paddingLeft: 20,
  },
  progressHeader: {
    fontSize: 18,
    marginLeft: 15,
  },
  innerActiveStep: {
  },
  innerActiveStepLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  innerStepper: {
    padding: 5,
    paddingTop: 5,
  },
  step: {
    marginTop: -8,
  },
  stepper: {
    paddingLeft: 20,
  },
});
