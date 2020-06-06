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

const phoneButton = ({ redirectPath }) => {
    return (
        <>
            <Container>
                <Box p={2} d='flex' flexWrap='wrap' justifyContent='center' >
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
                        >發送</Box>
                    </Button>
                </Box>
                <Box p={2} d='flex' flexWrap='wrap' justifyContent='center'>
                    <Button
                        as='a'
                        href="/"
                        size='lg'
                        // w={{ base: "400px", sm: '300px' }}
                        w='100%'
                        variantColor='teal'
                        variant='solid'
                        borderRadius='9999px'
                        color='#000'
                        border="1px"
                        background='#fff'
                        p={8}
                        borderColor="#ccd0d5"
                    >
                        <Box
                            fontSize="2xl"
                            d='flex'
                            flex='1 0 auto'
                            justifyContent='center'
                            mt='-1px'
                            ml='8px'
                        >返回</Box>
                    </Button>
                </Box>
            </Container>
        </>
    )
}

export default phoneButton
