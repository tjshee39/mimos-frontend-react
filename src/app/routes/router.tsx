import { Navigate, RouteObject } from 'react-router-dom'
import AppRoot from '@pages/app/AppRoot'
import AppLogin from '@pages/app/AppLogin'
import AppMain from '@pages/app/AppMain'
import BtmSchool from '@pages/btm/BtmSchool'
// import BtmChat from '@pages/btm/BtmChat'
import BtmPay from '@pages/btm/BtmPay'
import BtmProfile from '@pages/btm/BtmProfile'
import PostList from '@pages/pst/PostList'
import PostDetail from '@pages/pst/PostDetail'

const Routes: RouteObject[] = [
  {
    path: '/',
    element: <AppRoot/>
  },
  {
    path: '/login',
    element: <AppLogin/>
  },
  {
    path: '/main',
    element: <AppMain/>,
    children: [
      { path: 'school', element: <BtmSchool/> },
      { path: 'post', element: <PostList/> },
      { path: 'post/:id', element: <PostDetail/> },
      { path: 'pay', element: <BtmPay/> },
      { path: 'profile', element: <BtmProfile/> },
      { index: true, element: <Navigate to="/main/school" />, }
    ]
  }
]

export default Routes