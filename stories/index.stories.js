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

const Login = ({ redirectPath }) => {
    return (
        <Layout>
            <FullscreenView>
                <FullscreenContent justifyContent='center'>
                    <LargeTitle>登入</LargeTitle>
                    <LoginButtonSet />
                </FullscreenContent>
            </FullscreenView>
        </Layout>
    )
}
export default { title: 'Login' };

export const Logins = () => { return App(Login) };

