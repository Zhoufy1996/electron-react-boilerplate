import React from 'react';
import Typography from '@material-ui/core/Typography';
import CountContainer from './store';

const CountView = () => {
  const { count } = CountContainer.useContainer();
  return <Typography>{count}</Typography>;
};

export default CountView;
