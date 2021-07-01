import { Button } from '@material-ui/core';
import React from 'react';
import CountContainer from './store';

const CountBtns = () => {
  const { increase, decrease } = CountContainer.useContainer();

  return (
    <div style={{ marginTop: 12 }}>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={increase}
      >
        +
      </Button>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        onClick={decrease}
        style={{ marginLeft: 12 }}
      >
        -
      </Button>
    </div>
  );
};

export default CountBtns;
