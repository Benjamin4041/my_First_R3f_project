import { AccumulativeShadows, ContactShadows, Environment, Lightformer, OrbitControls, RandomizedLight, Sky, Stage } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import React, { useRef } from 'react'
import { useFrame } from "@react-three/fiber"


export default function Experience() {

    const cube = useRef()
    const { color, opacity, blur } = useControls('shadow', {
        color: '#4b2709', opacity: {
            value: 2.0,
            min: 0,
            max: 5
            ,
        }, blur: { value: 2.0, min: 0, max: 5 }
    })

    const { sunPosition } = useControls('sky', { sunPosition: { value: [1, 2, 3] } })
    const { envMapIntencity, envMapHeight, envMapRadius, envMapScale } = useControls('enviromentMap', {
        envMapIntencity: { value: 1, min: 0, max: 12 },
        envMapHeight: { value: 1, min: 0, max: 100 },
        envMapRadius: { value: 20, min: 10, max: 100 },
        envMapScale: { value: 100, min: 10, max: 1000 }
    })
    useFrame((state, delta) => {

        cube.current.rotation.y += delta

    })
    return (<>
        {/* <Environment ground={{envMapHeight,envMapRadius, envMapScale }} preset='sunset'> */}
        {/* <color args={['#000000']} attach={"background"}/> */}
        {/* <mesh position-z={-5} scale={10}>
                <planeGeometry />
                <meshBasicMaterial color={[100,0,0]} />
            </mesh> */}
        {/* <Lightformer position-z={-5} scale={10} color={'red'} intensity={10} form={"ring"}/> */}
        {/* </Environment> */}

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
        {/* <ContactShadows position={[0, 0, 0]} scale={10} resolution={512} far={5} color={color} blur={blur} opacity={opacity} frames={1} /> */}
        {/* <Sky sunPosition={sunPosition} /> */}

        {/* <AccumulativeShadows position={[0, -0.99, 0]} opacity={0.8} frames={Infinity} scale={10} temporal blend={100}>
            <RandomizedLight amount={8} radius={1} ambient={0.5} intensity={1} position={[1, 2, 3]}
                bias={0.001} />
                </AccumulativeShadows> */}
        <Stage ContactShadows={{ opacity: 0.2, blur: 3 }} environment={'sunset'} preset={'portrait'} intensity={2}>

            <mesh position={[2, 1, 0]} ref={cube}  >
                <boxGeometry />
                <meshStandardMaterial envMapIntensity={envMapIntencity} color={'purple'} />
            </mesh>
            <mesh position={[-2, 1, 0]} >
                <sphereGeometry />
                <meshStandardMaterial envMapIntensity={envMapIntencity} color={'orange'} />
            </mesh>
        </Stage>
        {/* <mesh position={[2, 1, 0]} ref={cube}  >
            <boxGeometry />
            <meshStandardMaterial envMapIntensity={envMapIntencity} color={'purple'} />
        </mesh>
        <mesh position={[-2, 1, 0]} >
            <sphereGeometry />
            <meshStandardMaterial envMapIntensity={envMapIntencity} color={'orange'} />
        </mesh> */}
        {/* <mesh position={[0, 0, 0]} rotation-x={- Math.PI * 0.5} scale={10} >
            <planeGeometry />
            <meshStandardMaterial envMapIntensity={envMapIntencity} color={"lightgreen"} />
        </mesh> */}
    </>)
}