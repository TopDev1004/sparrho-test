import React, { useState } from 'react';
import { TextField, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { convertNumToWord } from './utils/converter';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '100px',
    maxWidth: '500px',
    padding: '10px',
    textAlign: 'center',
    margin: 'auto'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px'
  },
  words: {
    marginTop: '30px',
  }
}));

function App() {
  const classes = useStyles();
  const [digit, setDigit] = useState(0);

  const error = digit < 0 || digit > 9999;
  return (
    <Paper className={classes.container}>
      <h1>Convert digit to words ( 0 - 9999 )</h1>
      <form className={classes.form}>
        <TextField
          id="outlined-number"
          label="Digit"
          type="number"
          value={digit}
          error={error}
          helperText={error && "Only available 0 - 9999"}
          onChange={(event) => setDigit(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Output: (Words)"
          className={classes.words}
          value = {error ? 'Not Available' : convertNumToWord(digit)}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
      </form>
    </Paper>
  );
}

export default App;
