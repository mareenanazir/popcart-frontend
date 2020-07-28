import styled from "styled-components"
import { Card as rCard } from "rebass"

export const Card = styled(rCard)`
  border-radius: 5px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
  height: auto;
  padding: 30px 30px 30px 20px;
  width: 100%;
  @media only screen and (max-width: 1630px) {
    padding: 1rem;
    width: 250px;
    height: 400px;
  }
`
