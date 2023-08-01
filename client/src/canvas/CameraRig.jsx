import React, {useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import {easing} from 'maath'
import { useSnapshot } from 'valtio'

import state from '../store'

// passing children component ie center containing shirt
const CameraRig = ({children}) => {
  const group = useRef();
  const snap=useSnapshot(state);

  // this hook allow us to execute our code to evry rendered frame
  useFrame((state, delta)=>{
    // is display is big
    const isBreakpoint = window.innerWidth <=1260;
    // is disaply is mobile screen
    const isMobile = window.innerWidth<= 600;

    // set the initial pos of the model
    let targetPosition = [-0.4,0,2];
    if(snap.intro){
      if(isBreakpoint) targetPosition = [0,0,2];
      if(isMobile) targetPosition = [0,0.2,2.5]
    }
    else{
      if(isBreakpoint) targetPosition = [0,0,2.5];
      else targetPosition = [0,0,2]
    }

    //set model camera pos
    easing.damp3(state.camera.position, targetPosition, 0.25,delta)

    // set the model rotation smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y/10 , -state.pointer.x/5,0],
      0.25,
      delta
    )
  })

  
  return (
    <group ref ={group}>{children}</group>
  )
}

export default CameraRig