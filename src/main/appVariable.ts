import { app } from 'electron';

const getAppVariable = () => {
  return {
    home: app.getPath('home'),
    appData: app.getPath('appData'),
    userData: app.getPath('userData'),
    temp: app.getPath('temp'),
    exe: app.getPath('exe'),
    module: app.getPath('module'),
    desktop: app.getPath('desktop'),
    documents: app.getPath('documents'),
    downloads: app.getPath('downloads'),
    music: app.getPath('music'),
    pictures: app.getPath('pictures'),
    videos: app.getPath('videos'),
    recent: app.getPath('recent'),
    logs: app.getPath('logs'),
    crashDumps: app.getPath('crashDumps'),
  };
};

export default getAppVariable;
