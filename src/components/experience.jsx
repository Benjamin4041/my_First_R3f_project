import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import React from 'react'

export default function Experience() {


    return (<>
        <OrbitControls />
        <Perf />
        <ambientLight />
        <directionalLight position={[0, 0, 0]} />
        <mesh position={[-2,0,0]}>
            <sphereGeometry  />
            <meshStandardMaterial color={'orange'} />
        </mesh>
        <mesh position={[2, 0, 0,]}>
            <boxGeometry />
            <meshBasicMaterial color={'purple'} />
        </mesh>
        <mesh position={[0, -1, 0]} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshBasicMaterial color={"lightgreen"} />
        </mesh>
    </>)
}