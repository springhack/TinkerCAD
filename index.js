const { app, session, BrowserWindow } = require('electron');

let win;

app.commandLine.appendSwitch('lang', 'zh_CN');

app.on('ready', () => {
  session.defaultSession.setProxy({
    proxyRules: 'socks5://127.0.0.1:7070'
  }, () => {
    console.log('Proxy setup');
  });
  win = new BrowserWindow({
    title: 'Tinker CAD',
    webPreferences: {
      nodeIntegration: false
    }
  });
  win.loadURL('https://tinkercad.com');
});
