import React from "react";
import ReactMarkdown from "react-markdown";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing.unit,
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightLight,
    textAlign: 'justify',
  }
});

const renderers = {
  /* eslint-disable-next-line react/prop-types */
  heading: ({ level, ...props }) => {
    let variant;
    let paragraph;

    switch (level) {
      case 1:
        variant = 'h6';
        break;
      case 2:
        variant = 'h6';
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

    return <Typography {...props} gutterBottom variant={variant} paragraph={paragraph} />;
  },
  listItem: withStyles(styles)(({ classes, tight, ordered, ...props }) => (
    <li className={classes.listItem}>
      <Typography component="span" {...props} />
    </li>
  )),
  paragraph: withStyles(styles)(({ classes, tight, ordered, ...props }) => <Typography {...props} paragraph className={classes.paragraph}/>),
};

export default props => (
  <div>
    <ReactMarkdown renderers={renderers} {...props} />
  </div>
);
