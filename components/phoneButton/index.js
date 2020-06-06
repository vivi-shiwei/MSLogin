import React from 'react';
import { Container, Label } from './style'
import {
    Button,
    Box,
    InputGroup,
    Input,
    Select,
    Grid,
    Text
} from '@chakra-ui/core'

const phoneButton = ({ redirectPath }) => {
    return (
        <>
            <Box display={{ base: "block", sm: 'flex' }} w={{ base: "100%", sm: '540px' }}>
                <Select placeholder="澳門(+853)" fontSize="2xl" h="60px" m={1}
                    w={{ base: '100%', sm: '220px' }}
                    borderRadius='10px'>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
                <Input type="tel" placeholder="輸出你的手機號碼" borderRadius='10px' fontSize="2xl" m={1} h="60px"
                    w={{ base: '100%', sm: '336px' }} />
            </Box>
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
