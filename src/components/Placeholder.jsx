import React from "react";

export default function Placeholder({position,scale,boxArgs,color,wireframe}) {
    return (<>
        <mesh position={position} scale={scale}>
            <boxGeometry args={boxArgs} />
            <meshBasicMaterial wireframe={wireframe} color={color} />
        </mesh>
    </>)
}