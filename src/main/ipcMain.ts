import { ipcMain } from 'electron';
import getAppVariable from './appVariable';

const registerIpcMainEvent = () => {
  ipcMain.handle('get-app-variable', () => getAppVariable());
};

export default registerIpcMainEvent;
