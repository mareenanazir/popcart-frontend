import { Label as rLabel } from "@rebass/forms"
import styled from "styled-components"
import PropTypes from "prop-types"

export const Label = styled(rLabel)`
  display: inline-block !important;
`

Label.propTypes = {
  htmlFor: PropTypes.string,
}
