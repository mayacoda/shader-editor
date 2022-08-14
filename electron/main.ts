import * as path from 'path'
import { app, BrowserWindow, session, ipcMain } from 'electron'
import { loadFile, openFile } from './file-system/file-utils'
import { EventType } from './event-types'

const isDev = process.env.IS_DEV === 'true'

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      webSecurity: true,
    },
  })

  // and load the index.html of the app.
  // win.loadFile("index.html");
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../dist/index.html')}`
  )
  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools()
  }

  // Add event listeners for file operations
  ipcMain.handle(EventType.OpenFileDialog, async () => {
    return await openFile(mainWindow)
  })

  ipcMain.handle(EventType.LoadFile, async (event, args) => {
    return await loadFile(args.filePath)
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    // On macOS, it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ["script-src 'self'"],
      },
    })
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
