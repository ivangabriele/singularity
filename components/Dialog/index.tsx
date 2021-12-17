import React, { FunctionComponent, HTMLAttributes } from 'react'
import styled from 'styled-components'

import { Action } from './Action'
import { Body } from './Body'
import { Overlay } from './Overlay'
import { Title } from './Title'
import { Window } from './Window'

const StyledDialog = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
`

const NonExtendedDialog: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <StyledDialog {...props}>
    <Overlay />

    <Window>{children}</Window>
  </StyledDialog>
)

NonExtendedDialog.displayName = 'Dialog'

export const Dialog = Object.assign(NonExtendedDialog, {
  Action,
  Body,
  Title,
})
