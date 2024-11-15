import { AccumulativeShadows, OrbitControls, RandomizedLight } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import React, { useRef } from 'react'
import { useFrame } from "@react-three/fiber"


export default function Experience() {

    const cube = useRef()
    const { positions } = useControls({ positions: { value: { x: 2, y: 0, } } })
    useFrame((state, delta) => {
        cube.current.rotation.y += delta

    })
    return (<>
        <OrbitControls makeDefault />
        <Perf position='top-left' />
        <ambientLight />
        <directionalLight
            position={[1, 2, 3]}
            castShadow
            intensity={1.5}
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={0.1}
            shadow-camera-far={10}
            shadow-camera-left={-5}
            shadow-camera-right={5}
            shadow-camera-top={5}
            shadow-camera-bottom={-5}
        />


        <AccumulativeShadows position={[0, -0.99, 0]} opacity={0.8} frames={100} scale={10} temporal>
            <RandomizedLight amount={8} radius={1} ambient={0.5} intensity={1} position={[1, 2, 3]}
                bias={0.001} />
        </AccumulativeShadows>
        <mesh position={[-2, 0, 0]} castShadow>
            <sphereGeometry />
            <meshStandardMaterial color={'orange'} />
        </mesh>
        <mesh position={[2, 0, 0]} castShadow ref={cube} >
            <boxGeometry />
            <meshBasicMaterial color={'purple'} />
        </mesh>
        <mesh position={[0, -1, 0]} rotation-x={- Math.PI * 0.5} scale={10} receiveShadow>
            <planeGeometry />
            <meshStandardMaterial color={"lightgreen"} />
        </mesh>
    </>)
}