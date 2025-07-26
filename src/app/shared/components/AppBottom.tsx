import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AppBottom: React.FC = () => {
  const navigate = useNavigate()
  const [curPage, setCurPage] = useState<string>('BtmSchool')

  type BtmMenu = {
    btmMenuSeq: string;
    btmMenuName: string;
    btmMenuIcon: string;
    btmMenuScrId: string;
  }

  const btmMenuList: BtmMenu[] = [
    {
      btmMenuSeq: 'BTM0000000001',
      btmMenuName: '학사',
      btmMenuIcon: 'nav-school',
      btmMenuScrId: 'BtmSchool'
    },
    {
      btmMenuSeq: 'BTM0000000002',
      btmMenuName: '포스트',
      btmMenuIcon: 'nav-chat',
      btmMenuScrId: 'BtmPost'
    },
    {
      btmMenuSeq: 'BTM0000000003',
      btmMenuName: '페이',
      btmMenuIcon: 'nav-pay',
      btmMenuScrId: 'BtmPay'
    },
    {
      btmMenuSeq: 'BTM0000000004',
      btmMenuName: '프로필',
      btmMenuIcon: 'nav-profile',
      btmMenuScrId: 'BtmProfile'
    },
  ]

  const clickBtmMenu = (btmMenu: BtmMenu) => {
    setCurPage(btmMenu.btmMenuScrId)
    const screen = btmMenu.btmMenuScrId.split(/(?=[A-Z])/)[1].toLowerCase()
    navigate(`/main/${screen}`)
  }

  return (
    <>
    <div className="footer_nav">
      <div className="inner">
        {btmMenuList && btmMenuList.map(btmMenu => (
          <button
            key={btmMenu.btmMenuSeq}
            className={
              [
                btmMenu.btmMenuIcon,
                btmMenu.btmMenuScrId === curPage && 'on'
              ].join(' ')
            }
            onClick={() => clickBtmMenu(btmMenu)}
          >
            <i className="ico" />
            <span>{btmMenu.btmMenuName}</span>
          </button>
        ))}
    </div>
    </div>
    </>
  )
}

export default AppBottom