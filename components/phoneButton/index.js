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
            <Box display={{ base: "block", sm: 'flex' }} w={{ base: "100%", sm: '493px' }}>
                <Select placeholder="澳門(+853)" fontSize="xl" h="60px"
                    w={{ base: '100%', sm: '170px' }}
                    borderRadius='10px'>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
                <Input type="tel" placeholder="輸出你的手機號碼" borderRadius='10px' fontSize="xl" h="60px" ml={{ base: "0", sm: '3px' }} mt={{ base: "6px", sm: "0" }}
                    w={{ base: '100%', sm: '280px' }} />
            </Box>
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
                        >發送</Box>
                    </Button>
                </Box>
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
                        color='#000'
                        background='#fff'
                        border="1px"
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
