const { app, dialog, Menu, Tray } = require('electron');
const path = require('path');
const store = require('./settings.js');

let tray;

// This method creates a the system tray icon and context menu for the application
function createTray() {
  const iconPath = path.join(__dirname, "../resources/logo-16.png");
  tray = new Tray(iconPath);

  const contextMenu = Menu.buildFromTemplate([
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
    {
      type: 'separator'
    },
    {
      label: 'Quit',
      type: 'normal',
      click() {
        app.quit();
      }
    }
  ]);

  tray.setToolTip('Yet Another Pomodoro Timer Application');
  tray.setContextMenu(contextMenu);
}

module.exports = { createTray };