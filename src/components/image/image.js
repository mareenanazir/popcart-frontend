import React, { useState } from "react"
import PropTypes from "prop-types"

import { Image as Img } from "rebass"
import { Styled } from "./styled"

export const Image = ({ src, alt }) => {
  const [error, setError] = useState(0)
  return (
    <Styled>
      {src && !error ? (
        <Img src={src} onError={() => setError(1)} />
      ) : (
        <span>{alt && alt[0]}</span>
      )}
    </Styled>
  )
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
}
