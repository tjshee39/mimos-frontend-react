import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Ui from '../../shared/utils/ui-utils'
import { ModalParams } from '@core/slices/ui-slice'
import logoImage from '@assets/images/logo_miris.png'

const AppLogin: React.FC = () => {
  const navigate = useNavigate()
  const [isCapsLockOn, setIsCapsLockOn] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/

    // if (!emailPattern.test(formData.email)) {
    //   const params: ModalParams & { content: string } ={
    //     content: '올바른 이메일 형식으로 입력해주세요.'
    //   }
    //
    //   Ui.openLayerPopup('UiAlert', params)
    //   setFormData({
    //     email: '',
    //     password: ''
    //   })
    //
    //   return
    // }
    //
    // if (!passwordPattern.test(formData.password)) {
    //   const params: ModalParams & { content: string } ={
    //     content: '비밀번호는 8자 이상이며, 영문자, 숫자, <br>특수기호를 모두 포함해야 합니다.',
    //   }
    //
    //   Ui.openLayerPopup('UiAlert', params)
    //   setFormData(prev => ({
    //     ...prev,
    //     password: ''
    //   }))
    //
    //   return
    // }

    navigate('/main')
  }

  const checkCapsLock = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.getModifierState) {
      setIsCapsLockOn(event.getModifierState('CapsLock'))
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <>
      <div id="container">
        <div className="contents login">
          <div className="inner">
            <div className="logo">
              <img src={logoImage} alt="logo"/>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text" id="email" name="email" placeholder=""
                  value={formData.email} onChange={handleInputChange}
                />
                <label htmlFor="email">아이디(이메일)</label>
              </div>
              <div className="input-group">
                <input
                  type="password" id="password" name="password"
                  value={formData.password} onKeyUp={checkCapsLock} onChange={handleInputChange}
                />
                <label htmlFor="password">비밀번호</label>
              </div>
              { isCapsLockOn ? <p className="err_txt">⚠Caps Lock이 켜져있습니다.</p> : null }
              <div className="etc-group">
                <ul className="find-list">
                  <li>
                    <Link to="#">비밀번호 재설정</Link>
                  </li>
                </ul>
                <div className="remember">
                  <div className="flex">
                    <input type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember">아이디 저장</label>
                  </div>
                  <div className="flex">
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <label htmlFor="rememberMe">자동로그인</label>
                  </div>
                </div>
              </div>
              <div className="btm-group">
                <button type="submit" className="btn-lg-pm">로그인</button>
              </div>
              <div className="btm-join">
                계정이 없으신가요?
                <button type="button" className="join">회원가입</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppLogin