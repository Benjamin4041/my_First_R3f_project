// loading 3D Objects

import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import React, { useRef } from 'react'
import Helmelt from './Helmelt'


export default function Experience2() {
    const burger = useRef()

    return (<>
        <OrbitControls />
        <Perf position='top-left' />
        <directionalLight position={[1, 2, 3]} intensity={1.5} castShadow />
        <ambientLight intensity={0.5} />
        <Helmelt />
        <mesh scale={10} position-y={-1} rotation-x={- Math.PI * 0.5}>
            <planeGeometry />
            <meshStandardMaterial color={'greenyellow'} />
        </mesh>
    </>)
}