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

const brief = ({ redirectPath }) => {
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
                    <LargeTitle>簡訊驗證</LargeTitle>
                    <Text p={4} fontSize="xl">
                        請留意發送到手機的6位驗證碼信息
                    </Text>
                    <Input type="tel" placeholder="123456" borderRadius='4px' fontSize={{ base: "6xl", sm: "6xl" }} ml={2} h="90px" w="370px" />
                    <Container>
                        <Box p={8} d='flex' flexWrap='wrap' justifyContent='center'>
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
                                >確定</Box>
                            </Button>
                        </Box>
                    </Container>
                </FullscreenContent>
            </Box>
        </Layout >
    )
}
export default { title: 'brief' };
export const briefs = () => { return App(brief) };