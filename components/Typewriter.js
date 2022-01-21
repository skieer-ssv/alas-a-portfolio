import React, { Component } from 'react'
import Typical from 'react-typical'

export default function  Typewriter() {
  const TYPEWRITER_DISPLAY_TIME=4000
    return (
      <Typical
        steps={[ 'Full-Stack Developer', TYPEWRITER_DISPLAY_TIME,'Cross Platform Developer', TYPEWRITER_DISPLAY_TIME, 'Also "Whatever Tech I see first in the morning" Enthusiast', TYPEWRITER_DISPLAY_TIME, ]}
        loop={Infinity}
        wrapper="span"
        className={'text-2xl'}
      />
    )
  
}


