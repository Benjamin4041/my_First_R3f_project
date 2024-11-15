import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import React from 'react'

export default function Experience() {


    const { positions } = useControls({ positions: { value: { x: 2, y: 0,  } } })
    
    return (<>
        <OrbitControls />
        <Perf position='top-left' />
        <ambientLight />
        <directionalLight position={[1, 2, 3]} castShadow intensity={1.5} />
        <mesh position={[-2,0,0]} castShadow>
            <sphereGeometry />
            <meshStandardMaterial color={'orange'} />
        </mesh>
        <mesh position={[2,0,0]} castShadow >
            <boxGeometry />
            <meshBasicMaterial color={'purple'} />
        </mesh>
        <mesh position={[0, -1, 0]} rotation-x={- Math.PI * 0.5} scale={10} receiveShadow>
            <planeGeometry />
            <meshStandardMaterial color={"lightgreen"} />
        </mesh>
    </>)
}