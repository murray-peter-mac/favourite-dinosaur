/*
auto-generated by: https://github.com/react-spring/gltfjsx
author: quander (https://sketchfab.com/quander)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/randaling-t-rex-animated-09a3632365344a99bb88e3dd0b684c89
title: Randaling T- Rex, animated!
*/

import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/assets/trex/scene.gltf')

  // const actions = useRef()
  // const [mixer] = useState(() => new THREE.AnimationMixer())
  // useFrame((state, delta) => mixer.update(delta))
  // useEffect(() => {
  //   actions.current = {
  //     run: mixer.clipAction(animations[0], group.current),
  //     bite: mixer.clipAction(animations[1], group.current),
  //     roar: mixer.clipAction(animations[2], group.current),
  //     attack_tail: mixer.clipAction(animations[3], group.current),
  //     idle: mixer.clipAction(animations[4], group.current),
  //   }
  //   return () => animations.forEach((clip) => mixer.uncacheClip(clip))
  // }, [])
  return (
    <group ref={group} {...props} dispose={null} onClick={(e) => actions.current.roar.play()}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={[0.01, 0.01, 0.01]}>
            <primitive object={nodes.GLTF_created_0_rootJoint} />
            <skinnedMesh 
              material={materials.material_0}
              geometry={nodes.mesh_0.geometry}
              skeleton={nodes.mesh_0.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}
