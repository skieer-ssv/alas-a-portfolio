import React, { Component } from 'react'
import Typical from 'react-typical'

export default function  Typewriter() {
  const TYPEWRITER_DISPLAY_TIME=4000
    return (
      <Typical
        steps={['Flutter', TYPEWRITER_DISPLAY_TIME, 'React', TYPEWRITER_DISPLAY_TIME, 'PHP', TYPEWRITER_DISPLAY_TIME, 'Linux', TYPEWRITER_DISPLAY_TIME, ]}
        loop={Infinity}
        wrapper="span"
        className={'text-2xl'}
      />
    )
  
}


