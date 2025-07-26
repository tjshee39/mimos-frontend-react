import React from 'react'
import logo from '../../../assets/images/logo_miris.png'

const AppHeader: React.FC = () => {
  return (
    <>
      <header className="header main-header">
        <div className="inner">
          <div className="main_logo">
            <img src={logo} alt="로고" />
          </div>
          <div className="right_area">
            <button className="btn-edit">포틀릿 편집</button>
            <button className="btn-alarm">알람<span>15</span></button>
            <button className="btn-allmenu">전체메뉴</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default AppHeader