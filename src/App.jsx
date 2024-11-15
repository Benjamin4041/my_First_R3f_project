import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import Experience from './components/experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas className='can' camera={[0,0,0]}>
        <Experience />
      </Canvas>
    </>
  )
}

export default App
