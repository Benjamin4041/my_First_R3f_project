import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import React from 'react'

export default function Experience() {


    return (<>
    <OrbitControls/>
        <Perf />
        <ambientLight />
        <directionalLight position={[0, 0, 0]} />
        <mesh>
            <sphereGeometry />
            <meshStandardMaterial color={'orange'} />
        </mesh>
        <mesh position={[2,0,0,]}>
            <boxGeometry/>
            <meshBasicMaterial color={'purple'}/>
        </mesh>

    </>)
}