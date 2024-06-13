
import React, { useState } from 'react';
import { Card, Button, Grid, TextField, CardContent, Typography, CardHeader } from '@mui/material';


export default function Calculator() {
  const [number, setNumber] = useState(0);
  const [number1, setNumber1] = useState('');
  const [action, setAction] = useState('');

  function value(num) {
    if (number1 === '0' && num !== '.') {
      setNumber1(num.toString());
    } else {
      setNumber1((prevNumber1) => prevNumber1 + num.toString());
    }
  }

  function backSpace() {
    setNumber1((prevNumber1) => prevNumber1.slice(0, -1));
  }

  function clear() {
    setNumber('');
    setNumber1('');
    setAction('');
  }

  // 
  function sum(operation) {
    if (action) {
      calculate();
      setNumber1('')
      setAction(operation);
    } else {
      setNumber(parseFloat(number1));
      setNumber1('');
      setAction(operation);
    }
  }

  function calculate() {
    let result;
    switch (action) {
      case 'sum':
        result = parseFloat(number) + parseFloat(number1);
        break;
      case 'sub':
        result = parseFloat(number) - parseFloat(number1);
        break;
      case 'div':
        result = parseFloat(number) / parseFloat(number1);
        break;
      case 'mul':
        result = parseFloat(number) * parseFloat(number1);
        break;
      default:
        return;
    }
    
    setNumber1(result.toString());
    setNumber(result.toString()); 
    setAction('');
  }

  return (
    <Grid container spacing={1} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
      
      <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardHeader title="Calculator" sx={{pb:0}} />
        <CardContent>
          <TextField id="outlined-basic" value={number1} sx={{mb:3}} variant="outlined" fullWidth />
          <Grid container spacing={1} justifyContent="center">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'].map((num) => (
              <Grid item key={num}>
                <Button variant="contained" size="large" onClick={() => value(num)}>{num}</Button>
              </Grid>
            ))}
            <Grid item>
              <Button variant="contained" size="large" onClick={calculate}>=</Button>
            </Grid>
          </Grid>
          <Grid container spacing={1} justifyContent="center" sx={{ mt: 0 }}>
            {[
              { symbol: '+', operation: 'sum' },
              { symbol: '-', operation: 'sub' },
              { symbol: '*', operation: 'mul' },
              { symbol: '/', operation: 'div' },
              
            ].map(({ symbol, operation }) => (
              <Grid item key={operation}>
                <Button variant="contained" size="large" onClick={() => sum(operation)}>{symbol}</Button>
              </Grid>
            ))}
            <Grid item>
              <Button variant="contained" size="large" onClick={backSpace}>Back Space</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" size="large" onClick={clear}>Clear</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

