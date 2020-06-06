import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid
} from '@chakra-ui/core'

export const FullscreenContent = (props) => {
  return (
    <Box
      w='100%'
      maxW='1088px'
      d='flex'
      alignItems='center'
      flexDirection='column'
      py='32px'
      px='16px'
      flex='1 0 auto'
      {...props}
    />
  )
}

export const Title = (props) => {
  return (
    <Heading
      as='h1'
      fontSize="60px"
      // size='2xl'
      w='100%'
      mb='8px'
      textAlign='center'
      {...props}
    />
  )
}

export const LargeTitle = (props) => {
  return (
    <Title
      size='2xl'
      mb='16px'
      {...props}
    />
  )
}

export const CodeOfConduct = (props) => {
  return (
    <Text
      mt='64px'
      mx='32px'
      textAlign='center'
      {...props}
    />
  )
}
export const Label = (props) => {
  return (
    <Box
      d='flex'
      flex='1 0 auto'
      justifyContent='center'
      mt='-1px'
      ml='8px'
      {...props}
    />
  )
}

export const Container = (props) => {
  return (
    <SimpleGrid
      columns={1}
      spacing='16px'
      py='16px'
      w={{ base: '100%', sm: '340px' }}
      {...props}
    />
  )
}