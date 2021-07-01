import React from 'react';
import { ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import './App.global.css';
import CountContainer from './store';
import CountView from './CountView';
import CountBtns from './CountBtns';
import AppVariable from './AppVariable';

const theme = createMuiTheme();

const AppView = () => {
  return (
    <div>
      <CountView />
      <CountBtns />
    </div>
  );
};

const RouteBtns = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <ButtonGroup disableElevation variant="contained" color="primary">
      <Button
        onClick={() => {
          history.push('/count');
        }}
        variant="contained"
        color={pathname === '/count' ? 'primary' : 'default'}
        style={{ width: 100 }}
      >
        计数器
      </Button>

      <Button
        onClick={() => {
          history.push('/app');
        }}
        style={{ width: 100 }}
        variant="contained"
        color={pathname === '/app' ? 'primary' : 'default'}
      >
        APP参数
      </Button>
    </ButtonGroup>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <CountContainer.Provider>
        <Router>
          <div>
            <RouteBtns />
          </div>
          <Switch>
            <Route path="/count" component={AppView} />
            <Route path="/app" component={AppVariable} />
            <Redirect to="/count" />
          </Switch>
        </Router>
      </CountContainer.Provider>
    </ThemeProvider>
  );
}
