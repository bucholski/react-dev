import React from 'react'
import { Link } from 'react-router-dom'
import DefaultButton from './DefaultButton'
import HandContainer from './HandContainer'

const Step1 = ({setChoice}) => {
  return (
    <>
      <HandContainer setChoice={setChoice} link='./result'>
      </HandContainer>
      
    </>
  )
}

export default Step1