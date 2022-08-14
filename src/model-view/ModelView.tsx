import styles from './model-view.module.css'
import ModelCanvas from './ModelCanvas'
import ButtonOverlay from './ButtonOverlay'
import ModelContext from './ModelContext'
import { useState } from 'react'

function ModelView() {
  const model = useState<string>('')

  return (
    <div className={styles.modelView}>
      <ModelContext.Provider value={model}>
        <ButtonOverlay />
        <ModelCanvas />
      </ModelContext.Provider>
    </div>
  )
}

export default ModelView
