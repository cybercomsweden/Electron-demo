const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;

app.on('ready', _ => {
  new BrowserWindow();
  const name = electron.app.getName();
  const template = [{
    label: name,
    submenu: [{
      label: `About ${name}`,
      click: _ => console.log('click'),
      role: 'about'
    },
    {
      type: 'separator'
    },
    {
      label: 'Quit',
      click: _ => app.quit(),
      accelerator: 'Cmd+Q'
    }]
  }];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
});