const { Menu, Tray } = require('electron');
const path = require('path');
const store = require('./settings.js');

let tray = null;

// Context menu template, to be displayed when right-clicking on the system tray icon
const contextMenuTemplate = [
  {
    label: 'Preferences...',
    submenu: [
      {
        label: 'Launch at startup',
        type: 'checkbox',
        checked: store.get('launchAtStart'),
        click: event => store.set('launchAtStart', event.checked)
      },
      {
        label: 'Allow analytics',
        type: 'checkbox',
        checked: store.get('allowAnalytics'),
        click: event => store.set('allowAnalytics', event.checked)
      },
    ]
  },
  { type: 'separator' },
  { role: 'about', label: 'About'},
  { type: 'separator' },
  { role: 'minimize'},
  { role: 'quit', label: 'Quit' }
];

// This method creates a the system tray icon and context menu for the application
function createTray() {
  tray = new Tray(path.join(__dirname, '../build/tray-16.png'));
  
  tray.setToolTip('Yet another Pomodoro application');
  tray.setContextMenu(Menu.buildFromTemplate(contextMenuTemplate));
}

module.exports = { createTray };