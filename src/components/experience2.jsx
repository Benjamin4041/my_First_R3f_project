// loading 3D Objects

import { OrbitControls } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import React, { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'




export default function Experience2() {
    const burger = useRef()
    const model = useLoader(GLTFLoader,'./assets/3dmodels/hamburger.glb')
    useFrame((state,delta)=>{
        burger.current.rotation.y +=delta
    })
    return (<>
        <OrbitControls />
        <Perf position='top-left' />
        <directionalLight position={[1, 2, 3]} intensity={1.5} castShadow />
        <ambientLight intensity={0.5} />
            <primitive object={model.scene} scale={0.35} ref={burger} />
        <mesh scale={10} position-y={-1} rotation-x={- Math.PI * 0.5}>
            <planeGeometry />
            <meshStandardMaterial color={'greenyellow'} />
        </mesh>
    </>)
}