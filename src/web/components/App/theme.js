import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';

export default createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
  },
  background: {
    primary: '#e8eaed',
  },
  typography: {
    fontSize: 12,
    fontFamily: '\'Ubuntu\', sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    useNextVariants: true,
  },
});
