import { dialog } from 'electron'
import * as fs from 'fs'
import BrowserWindow = Electron.BrowserWindow

export const openFile = async (win: BrowserWindow) => {
  const { canceled, filePaths } = await dialog.showOpenDialog(win, {
    properties: ['openFile'],
  })
  if (!canceled && filePaths) {
    return await loadFile(filePaths[0])
  }
}

export const loadFile = async (filePath: string) => {
  return fs.promises.readFile(filePath)
}
