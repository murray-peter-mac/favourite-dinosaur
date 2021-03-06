/*
auto-generated by: https://github.com/react-spring/gltfjsx
author: AzurPoly (https://sketchfab.com/VapTor)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/lavargh-76e5c9630a66485fb3cd9d326f7e42ab
title: LAVARGH
*/

import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/assets/lavargh/scene.gltf')

  // const actions = useRef()
  // const [mixer] = useState(() => new THREE.AnimationMixer())
  // useFrame((state, delta) => mixer.update(delta))
  // useEffect(() => {
  //   actions.current = {
  //     'Take 01': mixer.clipAction(animations[0], group.current),
  //   }
  //   return () => animations.forEach((clip) => mixer.uncacheClip(clip))
  // }, [])
  return (
    <group ref={group} {...props} dispose={null} onClick={(e) => actions.current['Take 01'].play()}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, -3.82, 4.35]}>
          <primitive object={nodes.Armature_rootJoint} />
          <skinnedMesh material={materials.Lavargh} geometry={nodes.BODY_0.geometry} skeleton={nodes.BODY_0.skeleton} />
          <skinnedMesh
            material={materials.Lavargh}
            geometry={nodes.TEETH_DOWN_0.geometry}
            skeleton={nodes.TEETH_DOWN_0.skeleton}
          />
          <skinnedMesh
            material={materials.Lavargh}
            geometry={nodes.TEETH_UP_0.geometry}
            skeleton={nodes.TEETH_UP_0.skeleton}
          />
          <skinnedMesh material={materials.Lavargh} geometry={nodes.EYES_0.geometry} skeleton={nodes.EYES_0.skeleton} />
        </group>
        <group position={[4.08, 1.01, 5.9]} rotation={[-0.27, 0.6, 1.93]} scale={[1, 1, 1]} />
      </group>
    </group>
  )
}
