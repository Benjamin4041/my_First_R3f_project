import { AccumulativeShadows, ContactShadows, Environment, OrbitControls, RandomizedLight, Sky } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import React, { useRef } from 'react'
import { useFrame } from "@react-three/fiber"


export default function Experience() {

    const cube = useRef()
    const { color, opacity, blur } = useControls('shadow', {
        color: 'darkblue', opacity: {
            value: 2.0,
            min: 0,
            max: 5
            ,
        }, blur: { value: 2.0, min: 0, max: 5 }
    })

    const { sunPosition } = useControls('sky', { sunPosition: { value: [1, 2, 3] } })
    const { envMapIntencity } = useControls('enviromentMap', {
        envMapIntencity: { value: 1, min: 0, max: 12 }
    })
    useFrame((state, delta) => {

        cube.current.rotation.y += delta

    })
    return (<>
        <Environment background files={[
            './assets/environmentMaps/2/px.jpg',
            './assets/environmentMaps/2/nx.jpg',
            './assets/environmentMaps/2/py.jpg',
            './assets/environmentMaps/2/ny.jpg',
            './assets/environmentMaps/2/pz.jpg',
            './assets/environmentMaps/2/nz.jpg',
        ]} />
        <OrbitControls makeDefault />
        <Perf position='top-left' />
        {/* <ambientLight />
        <directionalLight
            position={sunPosition}
            castShadow
            intensity={1.5}
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={0.1}
            shadow-camera-far={10}
            shadow-camera-left={-5}
            shadow-camera-right={5}
            shadow-camera-top={5}
            shadow-camera-bottom={-5}
        /> */}
        <ContactShadows position={[0, -0.99, 0]} scale={10} resolution={512} far={5} color={color} blur={blur} opacity={opacity} frames={1} />
        {/* <Sky sunPosition={sunPosition} /> */}

        {/* <AccumulativeShadows position={[0, -0.99, 0]} opacity={0.8} frames={Infinity} scale={10} temporal blend={100}>
            <RandomizedLight amount={8} radius={1} ambient={0.5} intensity={1} position={[1, 2, 3]}
                bias={0.001} />
                </AccumulativeShadows> */}
        <mesh position={[2, 0, 0]} ref={cube}  >
            <boxGeometry />
            <meshStandardMaterial envMapIntensity={envMapIntencity} color={'purple'} />
        </mesh>
        <mesh position={[-2, 0, 0]} >
            <sphereGeometry />
            <meshStandardMaterial envMapIntensity={envMapIntencity} color={'orange'} />
        </mesh>
        <mesh position={[0, -1, 0]} rotation-x={- Math.PI * 0.5} scale={10} >
            <planeGeometry />
            <meshStandardMaterial envMapIntensity={envMapIntencity} color={"lightgreen"} />
        </mesh>
    </>)
}