import React, { useEffect, useState } from 'react'

const withDimensions = (Component) => {
  return (props) => {
    const [height, setHeight] = useState(null)
    const [width, setWidth] = useState(null)

    useEffect(() => {
      if (window) {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
      }
    }, [])

    return <Component {...props} height={height} width={width} />
  }
}

export default withDimensions
