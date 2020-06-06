import React from 'react';
import {
    Box,
    InputGroup,
    Select,
    Input,
    Button,
    Flex,
    Text,
    SimpleGrid
} from '@chakra-ui/core'
import Layout from '../components/layout'
import FullscreenView from '../components/fullscreenView'
import LoginButtonSet from '../components/loginButtonSet'
import PhoneButton from '../components/phoneButton'
import App from '../App'

import {
    LargeTitle,
    FullscreenContent,
    Title,
    CodeOfConduct,
    Label,
} from './style'

const Containers = (props) => {
    return (
        <SimpleGrid
            columns={2}
            spacing='16px'
            py='16px'
            display={{ base: 'block', sm: 'flex' }}
            w={{ base: '100%', sm: '550px' }}
            {...props}
        />
    )
}


const phone = ({ redirectPath }) => {
    return (
        <Layout>
            <FullscreenView>
                <FullscreenContent justifyContent='center'>
                    <LargeTitle>手機登入</LargeTitle>
                    <InputGroup pt={6}>
                        <Select placeholder="澳門(+853)" fontSize="2xl" h="60px" m={1}
                            borderRadius='10px'>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                        <Input type="tel" placeholder="輸出你的手機號碼" borderRadius='10px' fontSize="2xl" m={1} h="60px" />
                    </InputGroup>
                    <PhoneButton />
                </FullscreenContent>
            </FullscreenView>
        </Layout >
    )
}


export default { title: 'phone' };
export const phones = () => { return App(phone) };