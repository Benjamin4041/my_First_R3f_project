import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'

import Experience from './components/experience'
import Experience2 from './components/experience2'

function App() {
  return (
    <>
      <Canvas  camera={{ fov: 45, near: 0.1, far: 200, position: [3, 2, 6] }} shadows={false}>
        <Experience2 />
      </Canvas>
    </>
  )
}

export default App
