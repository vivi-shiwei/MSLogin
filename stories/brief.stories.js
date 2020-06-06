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
import BriefButton from '../components/briefButton'
import App from '../App'

import {
    LargeTitle,
    FullscreenContent,
    CodeOfConduct,
    Label,
} from './style'

const brief = ({ redirectPath }) => {
    return (
        <Layout>
            <FullscreenView>
                <FullscreenContent justifyContent='center'>
                    <LargeTitle>簡訊驗證</LargeTitle>
                    <Text fontSize="xl" w>
                        請留意發送到手機的6位驗證碼信息
                    </Text>
                    <BriefButton />
                </FullscreenContent>
            </FullscreenView >
        </Layout >
    )
}
export default { title: 'brief' };
export const briefs = () => { return App(brief) };