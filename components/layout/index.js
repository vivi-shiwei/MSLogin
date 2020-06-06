import React from 'react';
import { Box, CSSReset } from '@chakra-ui/core'

const EmptyLayout = ({ children }) => (
    <Box>
        {children}
    </Box>
)



export default ({ children }) => {

    return (
        <EmptyLayout>
            <CSSReset />
            {children}
        </EmptyLayout>
    )
}
