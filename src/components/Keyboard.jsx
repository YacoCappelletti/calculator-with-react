import React from 'react'

import { NumberButton } from './NumberButton'
import { OperatorButton } from './OperatorButton'



export const Keyboard = ({onPressButton}) => {

  
  const inputValue = (value) => {
    onPressButton(value);
  }



  return (
    <>
      <div className='keyboard-container'>
        <div className='btn-row'>

          <NumberButton number={7} buttonPressed = {(value)=> inputValue(value)}/>
          <NumberButton number={8} buttonPressed = {(value)=> inputValue(value)} />
          <NumberButton number={9} buttonPressed = {(value)=> inputValue(value)}/>
          <OperatorButton caracter={'+'} buttonPressed = {(value)=> inputValue(value)}/>
          </div>
          <div className='btn-row'>

          <NumberButton number={4} buttonPressed = {(value)=> inputValue(value)}/>
          <NumberButton number={5} buttonPressed = {(value)=> inputValue(value)}/>
          <NumberButton number={6} buttonPressed = {(value)=> inputValue(value)}/>
          <OperatorButton caracter={'-'} buttonPressed = {(value)=> inputValue(value)}/>
          </div>
          <div className='btn-row'>
          <NumberButton number={1} buttonPressed = {(value)=> inputValue(value)}/>
          <NumberButton number={2} buttonPressed = {(value)=> inputValue(value)}/>
          <NumberButton number={3} buttonPressed = {(value)=> inputValue(value)}/>
          <OperatorButton caracter={'x'} buttonPressed = {(value)=> inputValue(value)}/>
          </div>
          <div className='btn-row'>
          <NumberButton number={0} buttonPressed = {(value)=> inputValue(value)}/>
          <OperatorButton caracter={'C'} buttonPressed = {(value)=> inputValue(value)}/>
          
          <OperatorButton caracter={'='} buttonPressed = {(value)=> inputValue(value)}/>
          <OperatorButton caracter={'/'} buttonPressed = {(value)=> inputValue(value)}/>
          </div>
          
          
          
        
      </div>
   
     

    </>
  )
}
