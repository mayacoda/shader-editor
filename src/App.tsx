import './App.css'
import ModelViewer from './model-view/ModelView'
import ShaderEditor from './shader-editor/ShaderEditor'

import styles from './app.module.css'
import { ErrorBoundary } from './ErrorBoundry'

function App() {
  return (
    <div className={styles.container}>
      <ErrorBoundary>
        <ModelViewer />
      </ErrorBoundary>

      <ErrorBoundary>
        <ShaderEditor />
      </ErrorBoundary>
    </div>
  )
}

export default App
