import React from 'react';
// import { Container, Label } from './style'
import {
  Button,
  Box,
  InputGroup,
  Input,
  Select
} from '@chakra-ui/core'

const phoneButton = ({ redirectPath }) => {
  return (
    // <Container>
    <InputGroup>
      <Select placeholder="澳門(+853)">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Input type="tel" roundedLeft="0" placeholder="輸出你的手機號碼" />
    </InputGroup>
    // </Container>
  )
}

export default phoneButton
