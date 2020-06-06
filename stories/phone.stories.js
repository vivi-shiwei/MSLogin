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

const phone = ({ redirectPath }) => {
    return (
        <Layout>
            <FullscreenView>
                <FullscreenContent justifyContent='center'>
                    <LargeTitle>手機登入</LargeTitle>
                    <PhoneButton />
                </FullscreenContent>
            </FullscreenView>
        </Layout >
    )
}


export default { title: 'phone' };
export const phones = () => { return App(phone) };