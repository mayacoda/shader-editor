import { createContext } from 'react'
import type { Dispatch } from 'react'

const ModelContext = createContext<[Uint8Array, Dispatch<Uint8Array>]>([
  null!,
  () => {},
])

export default ModelContext
