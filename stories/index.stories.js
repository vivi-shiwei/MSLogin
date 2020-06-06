import React from 'react';
import {
    Box,
} from '@chakra-ui/core'
import Layout from '../components/layout'
import FullscreenView from '../components/fullscreenView'
import LoginButtonSet from '../components/loginButtonSet'
import App from '../App'

import {
    LargeTitle,
    FullscreenContent
    // CodeOfConduct
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
export const phone = () => { return App(Login) };

