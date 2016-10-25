const electron = require('electron');
const path = require('path');

const { Tray, app, Menu } = electron;

app.on('ready', _ => {
  const tray = new Tray(path.join('src', 'logo.png'));
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Wow',
      click: _ => console.log('wow')
    },
    {
      label: 'awesome',
      click: _ => console.log('awesome')  
    }
  ]);
  tray.setContextMenu(contextMenu);
  tray.setToolTip('My great app');
});
