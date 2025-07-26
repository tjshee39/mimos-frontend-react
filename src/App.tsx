import React from 'react'
import { useRoutes } from 'react-router-dom'
import Routes from './app/routes/router'
import UiModal from './app/shared/components/UiModal'

const App: React.FC = () => {
  const element = useRoutes(Routes)
  return (
    <>
      <div id="wrap" className="mobile">
        { element }
      </div>
      <UiModal />
    </>
  )
}

export default App
