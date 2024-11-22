// loading 3D Objects

import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import React, { Suspense, useRef } from 'react'
import Placeholder from './Placeholder'
import Models from './models'
import Fox from './fox'


export default function Experience2() {


    return (<>
        <OrbitControls />
        <Perf position='top-left' />
        <directionalLight position={[1, 2, 3]} intensity={1.5} castShadow />
        <ambientLight intensity={0.5} />
        <Suspense fallback={<Placeholder color={'red'} scale={[2, 3, 2]} wireframe={true} boxArgs={[1, 1, 1, 2, 2, 2]} position={[0, 0.5, 0]} />}>
           <Models/>

        </Suspense>
        <Fox/>
        <mesh scale={10} position-y={-1} rotation-x={- Math.PI * 0.5}>
            <planeGeometry />
            <meshStandardMaterial color={'greenyellow'} />
        </mesh>
    </>)
}