
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

## 데이터
- 데이터를 표시할 땐 {{데이터}} 해준다

## 디렉티브
- v-text : 단락의 태그에서 v-text속성의 값으로 "텍스트"를 넣어주면 텍스트 출력
- v-html : v-text의 기능에서 텍스트로 그대로 출력이 아니라 html로 표현 (태그나 속성 적용)
- v-bind : 태그의 속성을 vue에서 지정 (v-bind: 를 생략하고 바로 :로 가능)
- v-on : v-on속성의 값을 이벤트 메소드와 연결
- v-if & v-else : 조건을 주어 html로 표현
- v-for : 배열로 이루어진 프로퍼티 반복적으로 표현


## 템플릿 문법
- import 할 때는 부모의 components에 적어준다.
- 자식의 export default 부분에 props에 적어준다.

- v-for
- props는 외부에서 받는 것, data는 내부에서 처리하는 것

## Vue vs Jquery
















































