// const MyPage = () => {
//   return <div>여기는 마이페이지!</div>;
// };
// export default MyPage;
//===============================================

//======================================
import { FaUserAlt } from 'react-icons/fa';
import { SlArrowLeft } from 'react-icons/sl';
import '../../css/user/ManagementP.scss';
import { MdOutlineSettings } from 'react-icons/md';

const MyPage = () => {
  return (
    <div className="managementP">
      <div className="miniTitle">
        <a>마이페이지</a>
        <SlArrowLeft />
        <a>포인트 관리</a>
      </div>
      <div className="HIuser">
        <b>일반회원님 환영합니다.</b>
        <button>
          회원정보 수정
          <MdOutlineSettings />
        </button>
      </div>
      <div className="ArrangeP">
        <div className="userIcon">
          <FaUserAlt size="160" />
          <br />
          <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;일반회원</a>
        </div>
        <div className="Mycounter">
          <ul>
            <li>
              <a>신고</a>
              <a>3</a>
            </li>
            <li>
              <a>총 포인트</a>
              <a>100p</a>
            </li>
            <li>
              <a>가용 포인트</a>
              <a>100p</a>
            </li>
            <li>
              <a>사용 포인트</a>
              <a>5000p</a>
            </li>
          </ul>
          {/* <ul>
            <li>
              <a>신고</a>
              <a>총 포인트</a>
              <a>가용 포인트</a>
              <a>사용 포인트</a>
            </li>
            <li>
              <a>3</a>
              <a>100p</a>
              <a>100p</a>
              <a>5000p</a>
            </li>
          </ul> */}
        </div>
      </div>
      <div className="userBenefit">
        <div>
          <p>회원님의 혜택정보</p>
        </div>
        <div className="BenefitInfo">
          - 담당자의 확인을 거쳐 정상처리된 신고건수당
          <br />
          50p가 적립되며, 포인트는 온누리 상품권으로 교환이 가능합니다.
          <br />
          <br />
          - 담당자의 확인을 거쳐 정상처리된 신고건수당 50p가 적립되며,
          <br />
          포인트는 온누리 상품권으로 교환이 가능합니다.
          <br />
          {/* <p>- 담당자의 확인을 거쳐 정상처리된 신고건수당 </p>
          <p>50p가 적립되며, 포인트는 온누리 상품권으로 교환이 가능합니다.</p>
          {/* <span>
            - 담당자의 확인을 거쳐 정상처리된 신고건수당 50p 가 적립되며,
            포인트는 온누리 상품권으로 교환이 가능합니다.
          </span> */}
          {/* <br />
          <br />
          <p>- 온누리 상품권은</p>
          <p>
            모바일로 발송되오니 개인정보 수집 이용에 동의하여 주시기 바랍니다.
          </p> */}
          {/* <span>

            - 온누리 상품권은 모바일로 발송되오니 개인정보 수집 이용에 동의하여
            주시기 바랍니다.
          </span> */}
        </div>
      </div>
    </div>
  );
};
export default MyPage;
