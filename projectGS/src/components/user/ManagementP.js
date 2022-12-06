import { FaUserCircle } from 'react-icons/fa';
import { SlArrowLeft } from 'react-icons/sl';

const ManagementP = () => {
  return (
    <>
      <div>
        <div>
          <FaUserCircle />
        </div>
        <div>일반회원</div>
      </div>
      <div>
        <h5>MYPAGE</h5>
        <SlArrowLeft />
        <h5>회원정보</h5>
      </div>
      <div>회원정보 수정</div>
      <div>
        <ul>
          <li>
            <a>신고</a>
          </li>
          <li>
            <a>총 포인트</a>
          </li>
          <li>
            <a>가용 포인트</a>
          </li>
          <li>
            <a>사용 포인트</a>
          </li>
          <li>
            <a>MY 쿠폰</a>
          </li>
        </ul>
      </div>
      <div>
        <div>회원님의 혜택정보</div>
        <div>
          <a>
            - 담당자의 확인을 거쳐 정상처리된 신고건수당 50p 가 적립되며,
            포인트는 온누리 상품권으로 교환이 가능합니다.
          </a>
          <a>
            - 온누리 상품권은 모바일로 발송되오니 개인정보 수집 이용에 동의하여
            주시기 바랍니다.
          </a>
        </div>
      </div>
    </>
  );
};
export default ManagementP;
