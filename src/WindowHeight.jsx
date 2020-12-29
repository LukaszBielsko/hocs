import React from 'react'
import withDimensions from './withDimensions'

const WindowHeight = (props) => {
  const { height } = props

  return (
    <p>window height: {height}</p>
  )
}

export default withDimensions(WindowHeight)
