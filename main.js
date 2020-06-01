// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');

const { createTray } = require('./main/tray.js');
const { analytics } = require('./main/analytics.js');
const store = require('./main/settings.js');


function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });
 
  // and load the index.html of the app.
  mainWindow.loadFile('./index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Check for updates 
  autoUpdater.checkForUpdatesAndNotify();

  // Analytics: application has started
  analytics.appStarted();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createTray();
  createWindow();
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.setLoginItemSettings({
  openAtLogin: store.get('launchAtStart'),
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.