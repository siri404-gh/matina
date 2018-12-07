import React from 'react';
import ReactMarkdown from 'react-markdown';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing.unit,
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightLight,
    textAlign: 'justify',
  },
  padding: {
    padding: 10,
  },
});

const renderers = {
  heading: withStyles(styles)(({ classes, level, ...props }) => {
    let variant;
    let paragraph;

    switch (level) {
      case 1:
        variant = 'display1';
        break;
      case 2:
        variant = 'title';
        break;
      case 3:
        variant = 'subheading';
        break;
      case 4:
        variant = 'caption';
        // paragraph = true;
        break;
      default:
        variant = 'body';
        break;
    }

    return <Typography {...props} gutterBottom variant={variant} paragraph={paragraph} className={classes.padding} />;
  }),
  listItem: withStyles(styles)(({ classes, tight, ordered, ...props }) => (
    <li className={classes.listItem}>
      <Typography component="span" {...props} />
    </li>
  )),
  paragraph: withStyles(styles)(({ classes, tight, ordered, ...props }) => <Typography {...props} paragraph className={[ classes.paragraph, classes.padding ]} />),
};

export default props => <div>
    <Typography variant={'title'} style={{ padding: 10, paddingBottom: 0 }}>{props.title}</Typography>
    <Typography variant={'caption'} style={{ padding: 10, paddingBottom: 0 }}>{props.caption}</Typography>
    <ReactMarkdown renderers={renderers} {...props} />
  </div>;
