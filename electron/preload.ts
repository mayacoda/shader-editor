// electron/preload.js
import * as path from 'path'
import { contextBridge, ipcRenderer } from 'electron'
import { EventType } from './event-types'
import { ElectronAPI } from '../src/renderer'

const api: ElectronAPI = {
  openFileDialog: async () => {
    return await ipcRenderer.invoke(EventType.OpenFileDialog)
  },
  loadFile: async (filePath: string) => {
    return await ipcRenderer.invoke(EventType.LoadFile, {
      filePath: path.join(__dirname, filePath),
    })
  },
}

contextBridge.exposeInMainWorld('electron', api)
