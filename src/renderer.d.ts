export interface ElectronAPI {
  openFileDialog: () => Promise<string>
  loadFile: (filePath: string) => Promise<Uint8Array>
  loadFileFromDialog: () => Promise<Uint8Array>
}

declare global {
  interface Window {
    electron: ElectronAPI
  }
}
