import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect } from 'react'

export default function Fox() {
    const model = useGLTF('./assets/3dmodels/Fox/glTF/Fox.gltf')
    const animation = useAnimations(model.animations,model.scene)

    useEffect(()=>{
        
    },[])


    return (<>

        <primitive object={model.scene} scale={0.02} position-x={-2} position-y={-1} />

    </>)
}