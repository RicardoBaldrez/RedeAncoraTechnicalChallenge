import React, { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

import Menu from '../../components/LoggedArea/Menu'

const LoggedArea = (): ReactElement => {
  return (
    <div style={{display: 'flex', background: '#141414'}}>
      <Menu />
      <div style={{marginLeft: '160px', width: '100%', padding: '20px'}}>
        <div style={{padding: '30px 30px 0 30px', background: 'black', color: 'white', borderRadius: '10px'}}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default LoggedArea
