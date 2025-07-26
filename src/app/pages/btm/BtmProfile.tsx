import React from 'react'
import testImage from '../../../assets/images/id_testimg.png'

const BtmProfile: React.FC = () => {
  return (
    <>
      <div className="contents portlet port-profile">
        <div className="pt-wrap idcard">
          <div className="pt-box">
            <div className="id_wrap flex">
              <div className="pic"><img src={testImage} alt="profile"/></div>
              <div className="info">
                <div className="id_depart">경영학과 2학년</div>
                <div className="id_name">김미르</div>
                <div className="id_num">miris@miris.co.kr</div>
              </div>
            </div>
            <div className="input_wrap">
              <div className="email">miris@miris.co.kr</div>
              <div className="txt">안녕하세요 잘부탁드립니다😄</div>
            </div>
            <div className="btn_wrap">
              <button type="button" className="btn-sm-sc2">프로필 편집</button>
              <button type="button" className="btn-sm-sc2">내 정보 수정</button>
            </div>
          </div>
        </div>

        <div className="pt-wrap alarm">
          <div className="pt-title">
            알람설정
            <div className="form_toggle">
              <label className="toggle">
                <input type="checkbox" className="toggle-input" defaultChecked={true}/><span className="toggle-slider"></span>
              </label>
            </div>
          </div>
          <div className="pt-box">
            <div className="info">
              <div className="left">알람주기</div>
              <fieldset className="form flex">
                <legend>라디오폼</legend>
                <div className="form_chk">
                  <input type="radio" name="rd1" value="" id="radio1" defaultChecked={true}/>
                  <label htmlFor="radio1">1시간전</label>
                </div>
                <div className="form_chk">
                  <input type="radio" name="rd1" value="" id="radio2"/>
                  <label htmlFor="radio2">하루전</label>
                </div>
                <div className="form_chk">
                  <input type="radio" name="rd1" value="" id="radio3"/>
                  <label htmlFor="radio3">일주일전</label>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="pt-wrap payaccount">
          <div className="pt-title">페이 결제계좌</div>
          <div className="pt-box">
            <dl className="account_list">
              <dd>
                <div className="name">IBK개인입출통장</div>
                <div className="num">************2273</div>
              </dd>
              <dt className="bank_ibk"></dt>
            </dl>
            <dl className="account_list">
              <dd>
                <div className="name">IBK개인입출통장</div>
                <div className="num">************9937</div>
              </dd>
              <dt className="bank_ibk"></dt>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default BtmProfile