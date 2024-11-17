import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { useLoader } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
export default function Models() {
    // const model = useLoader(GLTFLoader, './assets/3dmodels/hamburger.glb', (loader) => {
    //     const dracoLoader = new DRACOLoader()
    //     dracoLoader.setDecoderPath('./assets/3dmodels/draco/')
    //     loader.setDRACOLoader(dracoLoader)
    // })
    const model = useGLTF('./assets/3dmodels/hamburger.glb')
    return (<>

        <primitive object={model.scene} scale={0.35} position-y={-1} />

    </>)
}