import React from 'react';
import { Container, Label } from './style'
import {
  Button
} from '@chakra-ui/core'
import { AiFillGoogleSquare, AiFillMessage } from 'react-icons/ai'

const LoginButtonSet = ({ redirectPath }) => {
  return (
    <Container>
      <Button
        as='a'
        href="/"
        size='lg'
        w='100%'
        variantColor='teal'
        variant='solid'
        borderRadius='9999px'
        color='#fff'
        background='rgb(234, 67, 53)'
        _hover={{
          background: 'rgb(234, 67, 53)'
        }}
      >
        <AiFillGoogleSquare size='24px' />
        <Label>
          使用 Google 登入
          </Label>
      </Button>
      <Button
        as='a'
        href="/"
        size='lg'
        w='100%'
        variantColor='teal'
        variant='solid'
        borderRadius='9999px'
        color='#fff'
        background='rgb(59, 89, 152)'
        _hover={{
          background: 'rgb(59, 89, 152)'
        }}
      >
        <AiFillMessage size='24px' />
        <Label>
          使用電話短訊 SMS 登入
      </Label>
      </Button>
    </Container>
  )
}

export default LoginButtonSet
