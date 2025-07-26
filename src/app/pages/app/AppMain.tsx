import React from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from '@components/AppHeader'
import AppBottom from '@components/AppBottom'

const AppMain: React.FC = () => {
  return (
    <>
      <AppHeader />
      <div>
        <Outlet />
      </div>
      <AppBottom />
    </>
  )
}

export default AppMain