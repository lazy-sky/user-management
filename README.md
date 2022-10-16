# user-management

```shell
git clone https://github.com/lazy-sky/user-management.git

cd user-management

npm i

json-server -p 9000 user_data.json # server
npm start # client, server와 별개의 터미널 탭에서

```

## Project Tree

```
📦user-management
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📂images
 ┃ ┃ ┗ 📂svgs
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜Container.tsx
 ┃ ┃ ┣ 📜GNB.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜SaveButton.tsx
 ┃ ┃ ┣ 📜UserInfo.tsx
 ┃ ┃ ┣ 📜UserItem.tsx
 ┃ ┃ ┗ 📜UserList.tsx
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📜Detail.tsx
 ┃ ┃ ┣ 📜Home.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂services
 ┃ ┃ ┗ 📜data.ts
 ┃ ┣ 📂states
 ┃ ┃ ┣ 📜currentUser.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜users.ts
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂base
 ┃ ┃ ┃ ┣ 📜_fonts.scss
 ┃ ┃ ┃ ┗ 📜_reset.scss
 ┃ ┃ ┣ 📜globalStyle.ts
 ┃ ┃ ┣ 📜index.scss
 ┃ ┃ ┗ 📜theme.ts
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📜global.d.ts
 ┃ ┃ ┗ 📜user.d.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜formatter.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜sort.ts
 ┃ ┃ ┗ 📜style.ts
 ┃ ┗ 📜index.tsx
 ┗ 📜user_data.json
```

## Feature

### Page 01

1. 상단에 첨부한 user_data.json 의 데이터 중 이름(name), 생년월일(date)이 왼쪽 리스트에 표출
2. checkbox 변경
    1. json 파일 내 checked 가 True 인 경우, 왼쪽 리스트에서 체크된 상태로 나타나며, 오른쪽 리스트에 표출
        1. 배경색이 #CBC5F0 으로 변경됨
        2. 왼쪽 리스트 클릭시 checkbox 도 변경됨
    2. False 인 경우, 오른쪽 리스트에서 삭제
3. 오른쪽 리스트 하단 저장하기 버튼 클릭시, 변경된 데이터(checked)가 user_data.json에 변경 저장됨
    1. 저장하기 누르기 전에 새로고침이나 페이지를 벗어날 경우, 초기화
    
4. 생년월일 기준으로 정렬
    1. 오름차순 : 최신 순서로 정렬
    2. 내림차순 : 오래된 순서로 정렬
    3. 기본은 오름차순

### Page 02

1. user_data.json 에서 checked : true인 데이터가 왼쪽 리스트에 생성
2. 리스트의 사용자 클릭시, 해당 사용자에 대한 정보가 표출됨
3. json 내 image 데이터가 없는 경우, 기본 이미지 띄우기
4. 생년월일 기준으로 정렬
    1. 오름차순 : 최신 순서로 정렬
    2. 내림차순 : 오래된 순서로 정렬
    3. 기본은 오름차순

### Description

- 요구 사항에 따라 user data는 redux를 활용하여 전역 상태로 관리
  - 모든 유저 목록에 해당하는 `users`와 선택한 유저에 해당하는 `currentUser`
- 각 `UserList`에서 서로 다른 정렬 상태를 가질 수 있도록 `useMemo`를 활용
- `json-server`를 활용하여 mock server 구축
  - 다음 [API](./src/services/data.ts)를 통해 get, patch call
  - API 호출 이후 데이터가 [mockup DB](./user_data.json)에 반영
- ESLint, Typesciprt rules 준수
- `routes/index`에서 라우팅을 관리하고 해당 디렉토리가 페이지 디렉토리 역할
- 프로젝트 사이즈를 고려하여 페이지 이외의 컴포넌트는 모두 `components`에서 관리

### Demo

#### Desktop

#### Mobile

## Tech & Libraries

#### Server

- json-server

#### State Managemnt

- react-redux(toolkit)

#### Style

- styled-components
- scss
- classnames

#### Coding Convention

- eslint
- stylelint
- prettier

#### Utilities and Others

- typescript
- axios: fetch 기능
- dayjs: 날짜 포맷팅
- react-use
- lodash.clonedeep
- sweetalert: alert UI
