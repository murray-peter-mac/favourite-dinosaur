import ReactDOM from 'react-dom'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree, extend } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Components
import Pistosaur from './objects/Pistosaur'
import Trex from './objects/Trex'
import Robotic from './objects/Robotic'
import Lavargh from './objects/Lavargh'

extend({ OrbitControls })

const CameraControls = () => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls component.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    const {
      camera,
      gl: { domElement },
    } = useThree();
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame((state) => controls.current.update());
    return <orbitControls ref={controls} args={[camera, domElement]} />;
};

function MyCanvas(props){

    return (
        <Canvas {...props} >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <CameraControls />
            <Suspense fallback={null}>
                {props.current == "Pistosaur" && <Pistosaur position={[0, 0, 0]} scale={[0.02, 0.02, 0.02]} rotation={[0.2, -0.5, 0]}/> }
                {props.current == "Trex" && <Trex position={[0, -1.5, 0]} scale={[0.5, 0.5, 0.5]} rotation={[0, -0.7, 0]}/> }
                {props.current == "Robotic" &&<Robotic position={[0, -1.5, 0]} scale={[0.1, 0.1, 0.1]} rotation={[0, -0.7, 0]}/> }
                {props.current == "Lavargh" &&<Lavargh position={[0, -1.5, 0]} scale={[0.3, 0.3, 0.3]} rotation={[0, -0.7, 0]}/> }
            </Suspense>
        </Canvas>
    )
}

export default MyCanvas;