/**
 * Include our app
 */
const {app, BrowserWindow, ipcMain, dialog } = require('electron');
const fs = require('fs');

// browser-window creates a native window
let mainWindow = null;

app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

const createWindow = () => {
  mainWindow = new BrowserWindow({show: false});
  mainWindow.maximize();
  mainWindow.show();

  // Tell Electron where to load the entry point from
  mainWindow.loadURL('file://' + __dirname + '/src/app/index.html');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Clear out the main window when the app is closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on("writeToFile", (event, contents) => {
  dialog.showSaveDialog((fileName) => {
    if (!fileName) return;

    fs.writeFileSync(fileName, contents);
  })
});
