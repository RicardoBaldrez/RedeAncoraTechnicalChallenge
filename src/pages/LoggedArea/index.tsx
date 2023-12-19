import React, { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

import Menu from '../../components/LoggedArea/Menu'

import { WrapperBackground, WrapperContent, Content } from './styles'

const LoggedArea = (): ReactElement => {
  return (
    <WrapperBackground>
      <Menu />
      <WrapperContent>
        <Content>
          <Outlet />
        </Content>
      </WrapperContent>
    </WrapperBackground>
  )
}

export default LoggedArea
