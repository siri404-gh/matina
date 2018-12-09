import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { getRandomInt } from '../../utils/utils';
import Chartist from 'chartist';
import "./_chartist-settings.scss";
import "chartist/dist/scss/chartist.scss"
import Navbar from '../Navbar/Navbar';
import moment from 'moment';
import { howManyDaysAgo } from '../../utils/utils';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: 'auto',
    marginTop: 20,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  toolbar: {
    minHeight: 48,
  },
});

class Luckmeter extends Component {
  state = {
    value: 'a',
    data: JSON.parse(localStorage.getItem('luckData')) || { rights: [], wrongs: [] },
    error: false,
  };
  componentDidMount() {
    this.constructChart();
  }
  componentDidUpdate() {
    this.constructChart();
  }
  constructChart() {
    const rightCounts = this.state.data.rights.map(date => howManyDaysAgo(date));
    const wrongCounts = this.state.data.wrongs.map(date => howManyDaysAgo(date));
    const rights = [ 0, 0, 0, 0, 0, 0, 0 ];
    const wrongs = [ 0, 0, 0, 0, 0, 0, 0 ];
    const lucks = [ 0, 0, 0, 0, 0, 0, 0 ];
    rightCounts.forEach(count => {
      if(count < 7) rights[count]++;
    });
    wrongCounts.forEach(count => {
      if(count < 7) wrongs[count]++;
    });

    rights.forEach((right, i) => {
      lucks[i] = right && wrongs[i] ? Math.round(right*100/(wrongs[i] + right)) : 0;
    });
    const labels = [6, 5, 4, 3, 2, 1, 0];
    new Chartist.Line('.ct-chart', {
      labels: labels.map(label => moment().subtract(label, 'days').format('ddd')),
      series: [
        // rights.reverse(),
        // wrongs.reverse(),
        lucks.reverse(),
      ],
    }, {
      fullWidth: true,
      chartPadding: {
        right: 40,
      },
    });
  }
  onValueChange(e) {
    this.setState({
      value: e.target.value,
    });
  }
  onFormSubmit(e) {
    e.preventDefault();
    const values = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ];
    const value = values[getRandomInt(0, 25)];

    const data = this.state.data;

    if (value) {
      this.setState({ error: false });
      data.rights.push(moment().unix());
    } else {
      data.wrongs.push(moment().unix());
      this.setState({
        error: true,
      })
    }
    localStorage.setItem('luckData', JSON.stringify(data));
    this.setState({
      data,
    });
  }
  render() {
    const { classes } = this.props;

    return <div>
      <Navbar
        title={'Luckmeter'}
        tagline={'See your luck trending over time..'} />
      <div className={classes.toolbar} />
      <form className={classes.container} noValidate autoComplete="off" onSubmit={e => this.onFormSubmit(e)}>
        <TextField
          error={this.state.error}
          required
          id="outlined-required"
          label="Guess the letter"
          // defaultValue="A"
          value={this.state.value}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          helperText="Keep guessing to improve your trend."
          onChange={this.onValueChange.bind(this)}
          autoFocus />

        <div className="ct-chart ct-perfect-fourth"></div>
      </form>
    </div>;
  }
}

export default withStyles(styles)(Luckmeter);
