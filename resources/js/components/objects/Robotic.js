/*
auto-generated by: https://github.com/react-spring/gltfjsx
author: Muhammad Syaadan (https://sketchfab.com/syaadanY2K)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/42010648d97c4d43a319db0255a08f7d
title: Robotic T-Rex Roaring Animation
*/

import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/assets/robotic/scene.gltf')

  // const actions = useRef()
  // const [mixer] = useState(() => new THREE.AnimationMixer())
  // useFrame((state, delta) => mixer.update(delta))
  // useEffect(() => {
  //   actions.current = {
  //     'Take 001': mixer.clipAction(animations[0], group.current),
  //   }
  //   return () => animations.forEach((clip) => mixer.uncacheClip(clip))
  // }, [])
  return (
    <group ref={group} {...props} dispose={null} onClick={(e) => actions.current['Take 001'].play()}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            material={materials.roboMachiSG1}
            geometry={nodes['Robo_TRex_Geo1_robo:MachiSG1_0'].geometry}
            skeleton={nodes['Robo_TRex_Geo1_robo:MachiSG1_0'].skeleton}
          />
        </group>
      </group>
    </group>
  )
}