// const MyPage = () => {
//   return <div>여기는 마이페이지!</div>;
// };
// export default MyPage;
//===============================================

import { useNavigate } from 'react-router-dom';
import { SlArrowLeft } from 'react-icons/sl';
import '../../css/user/MyPage.scss';
// import ManagementP from '../components/user/ManagementP';

const MyPage = () => {
  // const navigate = useNavigate();

  return (
    <div className="myPage">
      {/* 사이드메뉴 바
      <div className="SideMenu">
        <button>MYPAGE</button>
      </div>
      <div>
        <ul>
          <li>
            <a href="/MyPage">회원정보</a>
          </li>
          <li>
            <a href="/ManagementP">포인트 관리</a>
          </li>
          <li>
            <a href="/myreport">나의 신고현황</a>
          </li>
        </ul>
      </div>  */}
      {/* 내용 1 - Head */}
      <div className="miniTitle">
        <a>마이페이지</a>
        <SlArrowLeft />
        <a>포인트 관리</a>
      </div>
      <div className="pointTitle">
        <h2>현재 회원님의 포인트</h2>
      </div>
      {/* 내용 2 */}
      <div className="pointSubTitle">
        <h3>• 포인트 총 잔액: 150p</h3>
      </div>
      {/* 내용 3 - 목록 리스트 */}
      <div className="topList">
        <ul className="listTitle">
          <li>
            <a>NO</a>
          </li>
          <li>
            <a>일시</a>
          </li>
          <li>
            <a>신고유형</a>
          </li>
          <li>
            <a>적립</a>
          </li>
          <li>
            <a>사용</a>
          </li>
          <li>
            <a>포인트 잔액</a>
          </li>
        </ul>
      </div>
      {/* NO3.목록리스트 */}
      <div>
        <ul className="listTitle">
          <li>
            <a>3</a>
          </li>
          <li>
            <a>2022-12-01</a>
          </li>
          <li>
            <a>불법주정차 (횡단보도)</a>
          </li>
          <li>
            <a>+ 50p</a>
          </li>
          <li>
            <a>0</a>
          </li>
          <li>
            <a>150p</a>
          </li>
        </ul>
      </div>
      {/* NO2.목록리스트 */}
      <div>
        <ul className="listTitle">
          <li>
            <a>2</a>
          </li>
          <li>
            <a>2022-11-28</a>
          </li>
          <li>
            <a>불법주정차 (소화전)</a>
          </li>
          <li>
            <a>+ 50p</a>
          </li>
          <li>
            <a>0</a>
          </li>
          <li>
            <a>100p</a>
          </li>
        </ul>
      </div>
      {/* NO1.목록리스트 */}
      <div>
        <ul className="listTitle">
          <li>
            <a>1</a>
          </li>
          <li>
            <a>2022-10-02</a>
          </li>
          <li>
            <a>불법주정차 (어린이 보호구역)</a>
          </li>
          <li>
            <a>50p</a>
          </li>
          <li>
            <a>0</a>
          </li>
          <li>
            <a>50p</a>
          </li>
        </ul>
      </div>
      {/* 안내사항 */}
      <div className="pointInfo">
        <span>
          • 잔여 포인트: 사용가능한 포인트로 사용방법은 5,000p이상시 사용
          가능합니다.
        </span>
        <br />
        <span>
          • 소멸예정 포인트: 소멸되기 2개월 전에 안내되며 소멸예정월 1일에
          소멸됩니다.
        </span>
      </div>
    </div>
  );
};
export default MyPage;
//======================================
