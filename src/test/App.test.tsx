import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// 중복 리턴값 함수화
const setup = () => {
  return render(<App />);
};

describe('Form', () => {
  test('form search test', () => {
    setup();

    // 폼 인풋을 찾기 위한 쿼리로 getByLabelText 선택
    const subredditInput = screen.getByLabelText('r /');
    // 입력 값을 변경하기 위해서는 @testing-library/user-event의 type 함수를 사용
    userEvent.type(subredditInput, 'reactjs');

    // 버튼 입력 테스트. ARIA: Roles 중 button 파라미터 사용. 두번쨰 파라미터에는 버튼 텍스트 입력.
    const submitButton = screen.getByRole('button', { name: /search/i });
    // @testing-library/user-event 모듈의 userEvent.click 함수를 사용
    userEvent.click(submitButton);

    // DOM 트리를 출력
    // screen.debug();
  });
});

describe('Header', () => {
  test('"How it works" link points to the correct page', () => {
    setup();

    // 페이지 테스트. ARIA: Roles 중 link 파라미터 사용. 두번째 파라미터에는 url 입력.
    const link = screen.getByRole('link', { name: /how it works/i });
    // @testing-library/user-event 모듈의 userEvent.click 함수를 사용
    userEvent.click(link);

    // 페이지 렌더링 확인 테스트. ARIA: Roles 중 heading 파라미터 사용. 두번째 파라미터에는 대표 제목 입력.
    const heading = screen.getByRole('heading', { name: /how it works/i });
    // 요소가 렌더링 되었는지 확인하기 위해 expect(...).toBeInDocument() 로 확인
    expect(heading).toBeInTheDocument();
  });

  test('"Logo" link points to the correct page', () => {
    setup();

    const logo = screen.getByRole('link', { name: /logo.svg/i });
    userEvent.click(logo);

    const heading = screen.getByRole('heading', { name: /Find the top posts on Reddit/i });
    expect(heading).toBeInTheDocument();
  });
});
