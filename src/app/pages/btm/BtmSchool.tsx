import React from 'react'
import idTestImage from '../../../assets/images/id_testimg.png'

const BtmSchool: React.FC = () => {
  return (
    <>
      <div className="contents portlet port-school">
        <div className="pt-wrap idcard">
          <div className="pt-box">
            <div className="id_wrap flex">
              <div className="pic">
                <img src={idTestImage} alt="profile"/>
              </div>
              <div className="info">
                <div className="id_depart">경영학과 2학년</div>
                <div className="id_name">김미르</div>
                <div className="id_num">miris@miris.co.kr</div>
              </div>
            </div>
            <div className="btn_wrap">
              <button type="button" className="btn-md-pm1 icowrap-nfc"><i className="ico"/>NFC</button>
              <button type="button" className="btn-md-pm1 icowrap-qr">
                <i className="ico"/>QR
              </button>
            </div>
          </div>
        </div>

        <div className="pt-wrap attend">
          <div className="pt-title">전자출결</div>
          <div className="pt-box">
            <div className="info">
              <div className="time">12:00 ~14:50</div>
              <div className="subject">경영학의 이해 <span className="pf_name"></span>(김준)</div>
              <div className="place">사회과학 2호관 201</div>
            </div>
            <div className="btn_wrap">
              <button type="button" className="btn-md-pm1 icowrap-confirm">
                <i className="ico"></i>
                <div></div>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-wrap notice">
          <div className="pt-title">공지사항</div>
          <div className="pt-box">
            <ul>
              <li><span className="la_recruit">채용</span>
                <div className="txt">공과대학 건축학과 조교 채용 공고</div>
              </li>
              <li><span className="la_all">전체</span>
                <div className="txt">2025학년도 생활관 학부신입생 신청 및 선발 안내</div>
              </li>
              <li><span className="la_department">학과</span>
                <div className="txt">미래 신진연구자 지원사업(Ascending SNU Future Leader Fellowship) 신규과제 안내 첨부파일 있음</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-wrap timetable">
          <div className="pt-title">시간표</div>
          <div className="pt-box today">
            <div className="date"><span className="emoji">&#128467;</span> 2025년 5월 14일 수요일</div>
            <div className="time_list">
              <div className="t_list">
                <div className="top">
                  <div className="time">09:00 ~ 09:50</div>
                  <div className="name">김은수</div>
                </div>
                <div className="btm">
                  <div className="subject">글로벌 문화와 커뮤니케이션</div>
                  <div className="place">학511</div>
                </div>
              </div>
              <div className="t_list">
                <div className="top">
                  <div className="time">11:00 ~ 13:00</div>
                  <div className="name">유준현</div>
                </div>
                <div className="btm">
                  <div className="subject">경제학 입문</div>
                  <div className="place">사회과학104</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BtmSchool