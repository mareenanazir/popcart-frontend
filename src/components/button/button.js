import styled from 'styled-components';
import { Button as rButton } from 'rebass';

export const Button = styled(rButton)`
  &&& {
    background: #C71585;
    border-radius: 7px;
    cursor: pointer;
    font-size: 16px;
    line-height: 23px;
    outline: none;
    padding: 15px 30px;
    text-transform: uppercase;
    width: 100%;
    @media only screen and (max-width: 1630px) {
      font-size: 12px;
    }
    &:disabled {
      background: #dddddd;
      cursor: not-allowed;
    }
  }
`;
