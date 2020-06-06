import React from 'react';
import {
    Box,
    InputGroup,
    Select,
    Input,
    Button,
    Flex,
    Text
} from '@chakra-ui/core'
import Layout from '../components/layout'
import FullscreenView from '../components/fullscreenView'
import LoginButtonSet from '../components/loginButtonSet'
import phoneButton from '../components/phoneButton'
import App from '../App'

import {
    LargeTitle,
    FullscreenContent,
    Title,
    CodeOfConduct,
    Label,
    Container
} from './style'

const phone = ({ redirectPath }) => {
    return (
        <Layout>
            <Box
                pos='fixed'
                top={0}
                left={0}
                right={0}
                bottom={0}
                w='100%'
                h='100%'
                d='flex'
                alignItems='center'
                justifyContent='flex-start'
                flexDirection='column'
                zIndex='4000'
                overflowY='auto'
            >
                <FullscreenContent justifyContent='center'>
                    <LargeTitle>手機登入</LargeTitle>
                    <InputGroup pt={6} display={{ base: 'block', sm: "flex" }}>
                        <Select placeholder="澳門(+853)" fontSize={{ base: "2xl", sm: "3xl" }} h="70px" m={2} w={{ base: "100%", sm: "40%" }}
                            borderRadius='10px'>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                        <Input type="tel" placeholder="輸出你的手機號碼" borderRadius='10px' fontSize={{ base: "2xl", sm: "3xl" }} m={2} h="70px" w={{ base: "100%", sm: "60%" }} />
                    </InputGroup>
                    <Container>
                        <Box p={4} d='flex' flexWrap='wrap' justifyContent='center'>
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
                            // w={{ base: "400px", sm: '300px' }}
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
                        <Box p={4} d='flex' flexWrap='wrap' justifyContent='center'>
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
                </FullscreenContent>
            </Box>
        </Layout >
    )
}


export default { title: 'phone' };
export const phones = () => { return App(phone) };