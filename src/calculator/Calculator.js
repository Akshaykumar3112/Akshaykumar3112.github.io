import * as React from 'react';
import { useState } from 'react';
import {Card, Button, Grid, TextField, CardContent } from '@mui/material';


export default function Calculator() {
  
  const [number, setNumber] = useState(0);
  const [number1, setNumber1] = useState('');
  const [action, setAction] = useState('');
  

  function value(num) {
    if(number1 === '0' && num !== '.'){
      setNumber1(num);
    }else{
      setNumber1((prevNumber1) => prevNumber1.toString() + num);
    }
  }

  function backSpace(num) {
    setNumber1((number1) => number1.slice(0, -1));
  }

  function sum(operation) {
    if (action) {
      if (action === 'sum') {
        setNumber(parseFloat(number) + parseFloat(number1));
      } else if (action === 'sub') {
        setNumber(parseFloat(number) - parseFloat(number1));
      } else if (action === 'mul') {
        setNumber(parseFloat(number) * parseFloat(number1));
      } else {
        setNumber(parseFloat(number) / parseFloat(number1));
      }
      setNumber1('');
      console.log(action);
      setAction(operation);

    } else {
      setNumber(number1);
      setNumber1('');
      setAction(operation);
      console.log('number1', number1);
      console.log('number', number);
      console.log(action);
    }
  }

  function calculate() {
    if (action === 'sum') {
      setNumber1(parseFloat(number) + parseFloat(number1));
    } else if (action === 'sub') {
      setNumber1(parseFloat(number) - parseFloat(number1));
    } else if (action === 'mul') {
      setNumber1(parseFloat(number) * parseFloat(number1));
    } else {
      setNumber1(parseFloat(number) / parseFloat(number1));
    }
    setNumber(0);
    setAction('');
    console.log('number1', number1);
    console.log('number', number);
  }

  return (
    <Grid container spacing={1} direction="column" alignItems="center" justifyContent="center" sx={{minHeight:'80vh'}}>
    <Card variant="outlined" sx={{maxWidth:345}}>
    <CardContent>
      <TextField id="outlined-basic" value={number1}  variant="outlined" />
          
      
      <br/>
      
      <Button variant="contained" size="large" style={{margin:'5px'}} onClick={() => value(0)} sx={{ mr: 1 }}>
        0
      </Button>
      <Button variant="contained" size="large" style={{margin:'5px'}} onClick={() => value(1)} sx={{ mr: 1 }}>
        1
      </Button>
      <Button variant="contained" size="large" style={{margin:'5px'}} onClick={() => value(2)} sx={{ mr: 1 }}>
        2
      </Button>
      <br />
      <Button variant="contained" size="large" style={{margin:'5px'}} onClick={() => value(3)} sx={{ mr: 1 }}>
        3
      </Button>
      <Button variant="contained" size="large" style={{margin:'5px'}} onClick={() => value(4)} sx={{ mr: 1 }}>
        4
      </Button>
      <Button variant="contained" size="large" style={{margin:'5px'}} onClick={() => value(5)} sx={{ mr: 1 }}>
        5
      </Button>
      <br />
      <Button variant="contained" size="large" style={{margin:'5px'}} onClick={() => value(6)} sx={{ mr: 1 }}>
        6
      </Button>
      <Button variant="contained" size="large" style={{margin:'5px'}} onClick={() => value(7)} sx={{ mr: 1 }}>
        7
      </Button>
      <Button variant="contained" size="large" style={{margin:'5px'}} onClick={() => value(8)} sx={{ mr: 1 }}>
        8
      </Button>
      <br />
      <Button variant="contained" size="large" style={{margin:'5px'}} onClick={() => value(9)} sx={{ mr: 1 }}>
        9
      </Button>
      <Button variant="contained" size="large" style={{margin:'5px'}} onClick={() => value('.')} sx={{ mr: 1 }}>
        .
      </Button>
      <Button variant="contained" size="large" style={{margin:'5px'}} onClick={calculate} sx={{ mr: 1 }}>
        =
      </Button>
      <br />
      <Button variant="contained" size="large" style={{margin:'5px'}} onClick={() => sum('sum')}>+</Button>
      <Button variant="contained" size="large" style={{margin:'5px'}} onClick={() => sum('sub')} sx={{ mr: 1 }}>
        -
      </Button>
      <Button variant="contained" size="large" style={{margin:'5px'}} onClick={() => sum('mul')} sx={{ mr: 1 }}>
        *
      </Button> <br />
      <Button variant="contained" size="large" style={{margin:'5px'}} onClick={() => sum('division')} sx={{ mr: 1 }}>
        /
      </Button>
      
      <Button variant="contained" size="large" style={{margin:'5px'}} onClick={() => backSpace()} sx={{ mr: 1 }}>
        Back Space
      </Button>
      </CardContent>
    </Card>
    </Grid>
  );
}

