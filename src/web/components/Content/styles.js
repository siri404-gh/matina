/* eslint-disable no-magic-numbers */

export default theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2,
    wordBreak: 'break-word',
    marginBottom: 60,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.background.primary,
    padding: 10,
  },
  toolbar: {
    minHeight: 48,
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
