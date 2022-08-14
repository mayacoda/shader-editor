export interface ElectronAPI {
  openFileDialog: () => Promise<File>
  loadFile: (filePath: string) => Promise<string>
}

declare global {
  interface Window {
    electron: ElectronAPI
  }
}
