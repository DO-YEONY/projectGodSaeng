import { useNavigate } from 'react-router-dom';
import { SlArrowLeft } from 'react-icons/sl';
import '../../css/user/MyPage.scss';
// import ManagementP from '../components/user/ManagementP';

const ManagementP = () => {
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
        {' '}
        <table
          border="0"
          cellPadding="0"
          cellSpacing="0"
          width="auto"
          height="180"
        >
          <thead>
            <tr>
              <th>NO</th>
              <th>일시</th>
              <th>신고유형</th>
              <th>적립</th>
              <th>사용</th>
              <th>포인트 잔액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3</td>
              <td>2022-12-01</td>
              <td>불법주정차 (횡단보도)</td>
              <td>+ 50p</td>
              <td></td>
              <td>150p</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2022-11-28</td>
              <td>불법주정차 (소화전)</td>
              <td>+ 50p</td>
              <td></td>
              <td>100p</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2022-10-02</td>
              <td>불법주정차 (어린이 보호구역)</td>
              <td>+ 50p</td>
              <td></td>
              <td>50p</td>
            </tr>
          </tbody>
        </table>
        {/* <ul>
          <li>
            <a>NO</a>
            <a>3</a>
            <a>2</a>
            <a>1</a>
          </li>
          <li>
            <a>일시</a>
            <a>2022-12-01</a>
            <a>2022-11-28</a>
            <a>2022-10-02</a>
          </li>
          <li>
            <a>신고유형</a>
            <a>불법주정차 (횡단보도)</a>
            <a>불법주정차 (소화전)</a>
            <a>불법주정차 (어린이 보호구역)</a>
          </li>
          <li>
            <a>적립</a>
            <a>+ 50p</a>
            <a>+ 50p</a>
            <a>+ 50p</a>
          </li>
          <li>
            <a>사용</a>
          </li>
          <li>
            <a>포인트 잔액</a>
            <a>150p</a>
            <a>100p</a>
            <a>50p</a>
          </li>
        </ul> */}
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
export default ManagementP;
