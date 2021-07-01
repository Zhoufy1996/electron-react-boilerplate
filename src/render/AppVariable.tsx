import React, { useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import getAppVariable from '../main/appVariable';

const AppVariable = () => {
  type AppVariable = ReturnType<typeof getAppVariable>;
  const [appVariable, setAppVariable] = useState<AppVariable | null>(null);
  useEffect(() => {
    const getData = async () => {
      const res = (await ipcRenderer.invoke('get-app-variable')) as AppVariable;
      setAppVariable(res);
    };
    getData();
  }, []);
  return (
    appVariable && (
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>key</TableCell>
              <TableCell>value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(appVariable).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {key}
                </TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

export default AppVariable;
