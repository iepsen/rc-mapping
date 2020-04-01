import React, { useEffect, useState } from 'react'
import { navigation, numbers } from '@rc-mapping/computer'

const Demo = () => {
  const [key, setKey] = useState('')
  /** @param {KeyboardEvent} event */
  const onKeyDown = event => {
    switch(event.keyCode) {
      case navigation.keyBack:
        setKey('Back')
        break
      case navigation.keyEnter:
        setKey('Enter')
        break
      case navigation.keyArrowLeft:
        setKey('Arrow Left')
        break
      case navigation.keyArrowRight:
        setKey('Arrow Right')
        break
      case navigation.keyArrowUp:
        setKey('Arrow Up')
        break
      case navigation.keyArrowDown:
        setKey('Arrow Down')
        break
      case numbers.keyNumberZero:
        setKey('Number Zero')
        break
      case numbers.keyNumberOne:
        setKey('Number One')
        break
      case numbers.keyNumberTwo:
        setKey('Number Two')
        break
      case numbers.keyNumberThree:
        setKey('Number Three')
        break
      case numbers.keyNumberFour:
        setKey('Number Four')
        break
      case numbers.keyNumberFive:
        setKey('Number Five')
        break
      case numbers.keyNumberSix:
        setKey('Number Six')
        break
      case numbers.keyNumberSeven:
        setKey('Number Seven')
        break
      case numbers.keyNumberEight:
        setKey('Number Eight')
        break
      case numbers.keyNumberNine:
        setKey('Number Nine')
        break
      default:
        setKey('')
        break
        
     }
  }
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])
  return (
    <div>
      <h1>Press any key</h1>
      {key && <p>Key pressed is: <strong>{key}</strong></p>}
    </div>
  )
}

export default Demo