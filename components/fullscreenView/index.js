import React from 'react';
import { CloseButton } from '@chakra-ui/core'

import { FullscreenViewContainer, CloseLink } from './style'

const FullscreenView = ({ children }) => {
  return (
    <FullscreenViewContainer>
      <CloseLink>
        <CloseButton />
      </CloseLink>
      {children}
    </FullscreenViewContainer>
  )
}

export default FullscreenView
