# subreddit 검색 어플리케이션 테스트 클론 코딩

참고 블로그 : https://blog.rhostem.com/posts/2020-10-14-beginners-guide-to-testing-react-1

## 사용 라이브러리

- jest
- @testing-library/react
- eslint
- prettier

## Form search test

- 테스트 묶음을 jest의 describe 함수를 사용해서 정의.
- 테스트 케이스는 test(...) 로 정의.
- @testing-library/react 모듈의 render 함수를 사용하여 DOM 생성. render(<App />);
- 렌더링된 요소 접근은 Testing Library에서 export된 screen 객체를 사용.
- 폼 인풋을 찾기 위한 쿼리로 getByLabelText 선택.
- 입력 값을 변경하기 위해서는 @testing-library/user-event의 type 함수를 사용.
- 버튼 입력 테스트. ARIA: Roles 중 button 파라미터 사용. 두번쨰 파라미터에는 버튼 텍스트 입력.
- @testing-library/user-event 모듈의 userEvent.click 함수를 사용.
- DOM 트리를 출력 screen.debug();
