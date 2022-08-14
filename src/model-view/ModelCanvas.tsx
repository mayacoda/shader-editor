import { useContext, useEffect, useState } from 'react'
import { Canvas, ThreeElements } from '@react-three/fiber'
import ModelContext from './ModelContext'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Model(props: ThreeElements['mesh'] & { gltf: GLTF | null }) {
  return props.gltf ? <primitive object={props.gltf.scene} /> : null
}

function ModelCanvas() {
  const [gltf, setGltf] = useState<GLTF | null>(null)

  const [model] = useContext(ModelContext)

  useEffect(() => {
    if (model) {
      loadModel(model)
    }
  }, [model])

  async function loadModel(model: Uint8Array) {
    const loader = new GLTFLoader()
    loader.parse(model.buffer, '', (gltfData) => {
      setGltf(gltfData)
    })
  }

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model gltf={gltf} />
    </Canvas>
  )
}

export default ModelCanvas
