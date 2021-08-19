
## 구름 ide 사지방에서 local host 접속
- package.json 에 추가
 "dev": "cross-env NODE_ENV=development webpack-dev-server --host 0.0.0.0 --disableHostCheck true --open --hot",
 "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
- 포트 재설정

## SPA
- 앱처럼 페이지 단위로 화면에 구성된 스타일 
- 서버 데이터(RESTFul API) => 호출 => 화면에 출력하는 스타일
- SPA 핵심은? 데이터 바인딩과 라우터 

## SPA 라이브러리 
- Vue.js        
- React.js
- Angular

## jQuery vs Vue.js
- jQuery : 웹페이지에 적합
- Vue.js : SPA에 적합


# Vue.js

## 템플릿 문법
- import 할 때는 부모의 components에 적어준다.
- 자식의 export default 부분에 props에 적어준다.
- v-if & v-else
- v-for
- props는 외부에서 받는 것, data는 내부에서 처리하는 것

## Vue vs Jquery
















































