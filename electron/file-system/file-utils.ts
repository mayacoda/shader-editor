import { dialog } from 'electron'
import * as fs from 'fs'
import BrowserWindow = Electron.BrowserWindow

export const openFile = async (win: BrowserWindow) => {
  const { canceled, filePaths } = await dialog.showOpenDialog(win, {
    // todo: add OBJ, FBX
    filters: [{ name: 'GLTF', extensions: ['.gltf', '.glb'] }],
    properties: ['openFile'],
  })
  if (!canceled && filePaths) {
    return filePaths[0]
  }
}

export const loadFileFromDialog: (
  win: BrowserWindow
) => Promise<Buffer | undefined> = async (win: BrowserWindow) => {
  const filePath = await openFile(win)
  if (filePath) {
    return await loadFile(filePath)
  }
}

export const loadFile: (filePath: string) => Promise<Buffer> = async (
  filePath: string
) => {
  return fs.promises.readFile(filePath)
}
