import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { useLoader } from '@react-three/fiber'
export default function Helmelt() {
    const model = useLoader(GLTFLoader, './assets/3dmodels/FlightHelmet/glTF/FlightHelmet.gltf', (loader) => {
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('./assets/3dmodels/draco/')
        loader.setDRACOLoader(dracoLoader)
    })
    return (<>

        <primitive object={model.scene} scale={5} position-y={-1} />

    </>)
}