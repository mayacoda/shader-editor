import styles from './button-overlay.module.css'
import { useContext, useEffect } from 'react'
import ModelContext from './ModelContext'

function ButtonOverlay() {
  const [model, setModel] = useContext(ModelContext)

  const openFileDialog = async () => {
    const file = await window.electron.loadFileFromDialog()
    setModel(file)
  }

  useEffect(() => {
    console.log('button overlay', model)
  }, [model])

  return (
    <div className={styles.overlay}>
      <button onClick={openFileDialog}>Open File</button>
    </div>
  )
}

export default ButtonOverlay
