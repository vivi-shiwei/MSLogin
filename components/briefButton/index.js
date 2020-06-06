import React from 'react';
import { Container, Label } from './style'
import {
  Button,
  Box,
  InputGroup,
  Input,
  Select,
  Text
} from '@chakra-ui/core'

const briefButton = ({ redirectPath }) => {
  return (
    <>
      <Input type="tel" placeholder="123456" borderRadius='4px' fontSize="5xl" w={{ base: "100%", sm: '440px' }} h />
      <Container>
        <Box d='flex' flexWrap='wrap' justifyContent='center'
          pt={2}>
          <Button
            as='a'
            href="/"
            size='lg'
            w='100%'
            variantColor='teal'
            variant='solid'
            borderRadius='9999px'
            color='#fff'
            background='rgb(179, 198, 255)'
            p={8}
          >
            <Box
              fontSize="2xl"
              d='flex'
              flex='1 0 auto'
              justifyContent='center'
              mt='-1px'
              ml='8px'
            >確定</Box>
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default briefButton
