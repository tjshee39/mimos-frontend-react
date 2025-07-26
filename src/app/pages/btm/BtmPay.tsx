import React from 'react'
import testImage from '../../../assets/images/test_img.png'

const BtmPay: React.FC = () => {
  return (
    <>
      <div className="contents portlet port-pay">
        <div className="pt-wrap paycard">
          <div className="pt-box">
            <div className="card_wrap">
              <div className="info flex">
                <div className="card_name">K-패스(체크)<span>1475</span></div>
                <button type="button" className="btn-more"></button>
              </div>
              <div className="pic_wrap flex">
                <div className="month_area">
                  <div className="sm_txt">5월 이용금액</div>
                  <div className="pay_num">85,124<span>원</span></div>
                </div>
                <div className="pic"><img src={testImage} alt="test"/></div>
              </div>
              <div className="btn_wrap">
                <button type="button" className="btn-md-pm1 icowrap-payment"><i className="ico"/>결제하기</button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-wrap mileage">
          <div className="pt-title">마일리지</div>
          <div className="pt-box">
            <div className="total_info">
              <div className="left flex"><i className="ico"/>보유 마일리지</div>
              <div className="right">18,310 P</div>
            </div>
            <div className="month_info">
              <div className="left">이번달 쌓인 마일리지</div>
              <div className="right">310 P</div>
            </div>
          </div>
        </div>

        <div className="pt-wrap recent">
          <div className="pt-title">최근 이용내역</div>
          <div className="pt-box">
            <ul className="detail_wrap">
              <li>
                <div className="left">
                  <div className="place">학생복지관(미플라자)3층</div>
                  <div className="date">2025.05.12 12:03</div>
                </div>
                <div className="right">
                  <div className="amount">8,000원</div>
                  <div className="card"><img src={testImage} alt="test"/></div>
                </div>
              </li>
              <li>
                <div className="left">
                  <div className="place">학생복지관(미플라자)3층</div>
                  <div className="date">2025.05.12 12:03</div>
                </div>
                <div className="right">
                  <div className="amount">8,000원</div>
                  <div className="card"><img src={testImage} alt="test"/></div>
                </div>
              </li>
              <li>
                <div className="left">
                  <div className="place">학생복지관(미플라자)3층</div>
                  <div className="date">2025.05.12 12:03</div>
                </div>
                <div className="right">
                  <div className="amount">8,000원</div>
                  <div className="card"><img src={testImage} alt="test"/></div>
                </div>
              </li>
              <li>
                <div className="left">
                  <div className="place">학생복지관(미플라자)3층</div>
                  <div className="date">2025.05.12 12:03</div>
                </div>
                <div className="right">
                  <div className="amount">8,000원</div>
                  <div className="card"><img src={testImage} alt="test"/></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default BtmPay