import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AppRoot: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/login')
  }, [])
  return (
    <>
    </>
  )
}

export default AppRoot