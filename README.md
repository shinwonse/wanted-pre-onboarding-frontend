# 원티드 프리온보딩 프론트엔드 - 선발 과제
로그인 기능과 간단한 투두 리스트 기능을 가지고 있는 프로젝트입니다.

## 배포 링크
🔗 [WANTED TODOLIST](https://wanted-pre-onboarding-frontend-shinwonse.vercel.app)


<img width="400" alt="스크린샷 2022-12-07 오전 12 58 09" src="https://user-images.githubusercontent.com/62709718/205960906-54fca84f-d57f-4e23-b8a2-1acef5be219c.png">

`vercel cli`를 사용하여 배포하였습니다.

## 실행 방법
```shell
$ npm install
$ npm start
```

## 기술 스택
<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/SASS-cc6699.svg?&style=for-the-badge&logo=Sass&logoColor=White"> <img src="https://img.shields.io/badge/axios-navy.svg?&style=for-the-badge&logo=Axios&logoColor=White">


## 브랜치 전략

<img width="400" alt="스크린샷 2022-12-07 오전 12 58 09" src="https://user-images.githubusercontent.com/62709718/205960697-75f3f884-61db-429e-9f6e-b17646ffd21f.png">

- `main` : 배포용 브랜치
- `routing` : 라우팅 기능 구현 브랜치
- `login` : 로그인 기능 구현 브랜치
- `todo` : 투두 리스트 기능 구현 브랜치
- `signup` : 회원가입 기능 구현 브랜치

## Lint

<img width="400" alt="스크린샷 2022-12-07 오전 12 58 09" src="https://user-images.githubusercontent.com/62709718/205963759-42df007d-2439-41e0-8f40-d732b42af090.png">

`ESLint`를 사용하여 코드 스타일을 통일하였습니다. 이때 다음과 같은 플러그인을 사용하였습니다.
- `eslint-plugin-react`
- `eslint-plugin-prettier`
- `eslint-plugin-import`

1인 프로젝트이지만 `eslint-plugin-import`를 통해 `import` 순서를 통일하여 가독성을 높였습니다. 

## 주요 기능

### 로그인 기능
<img width="400" alt="스크린샷 2022-12-07 오전 1 12 50" src="https://user-images.githubusercontent.com/62709718/205964077-51984509-a6f4-4173-823a-3d6b6f83cf5b.png">

- 로그인 기능은 `axios`를 사용하여 `POST` 요청을 보내어 구현하였습니다.
- 로그인 성공 시 `localStorage`에 `token`을 저장하고, `token`이 존재할 경우 `todo` 페이지로 리다이렉트하도록 구현하였습니다.
- 로그인 실패 시 `alert`를 띄우도록 구현하였습니다.

이때 이메일과 비밀번호의 유효성 검사는 `validations` 디렉토리에서 관리하여 로그인과 회원가입에서 사용할 수 있도록 하였습니다.

### 회원가입 기능
<img width="400" alt="스크린샷 2022-12-07 오전 1 13 36" src="https://user-images.githubusercontent.com/62709718/205964262-e39e10e7-65fa-4811-a363-05c5f9b0f3ab.png">

- 회원가입 기능은 `axios`를 사용하여 `POST` 요청을 보내어 구현하였습니다.
- 회원가입 성공 시 토큰을 반환하지만, 다시 한번 로그인을 요청하는 플로우가 맞다고 생각하여 이를 사용하지 않고 로그인 페이지로 리다이렉트하도록 구현하였습니다.
- 회원가입 실패 시 `alert`를 띄우도록 구현하였습니다.

### 투두 리스트 기능
<img width="400" alt="스크린샷 2022-12-07 오전 1 14 05" src="https://user-images.githubusercontent.com/62709718/205964354-1d681b84-84e5-4846-8831-6dab8c42c5c0.png">

- 기본적인 CRUD 기능을 구현하였습니다.
- 투두 리스트의 모든 api 통신은 `token`을 `header`에 담아 보내도록 구현하였습니다.
- 투두 리스트 기능은 `axios`를 사용하여 `GET` 요청을 보내어 구현하였습니다. 
- 투두 리스트의 상태를 변경할 때 `axios`를 사용하여 `PUT` 요청을 보내어 구현하였습니다. 
- 투두 리스트를 삭제할 때 `axios`를 사용하여 `DELETE` 요청을 보내어 구현하였습니다.
- 투두 리스트를 추가할 때 `axios`를 사용하여 `POST` 요청을 보내어 구현하였습니다.
- `localstorage`에 `token`이 존재하지 않을 경우 로그인 페이지로 리다이렉트하도록 구현하였습니다.
