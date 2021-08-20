
npm install -g yard
yarn install
yarn serve

## 구름 ide 사지방에서 local host 접속
- package.json 에 추가

{
  "name": "001_component_basic",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "dev": "cross-env NODE_ENV=development webpack-dev-server --host 0.0.0.0 --disableHostCheck true --open --hot",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
  },
  "dependencies": {
    "core-js": "^2.6.5",
    "vue": "^2.6.10"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.11.0",
    "@vue/cli-service": "^3.11.0",
    "vue-template-compiler": "^2.6.10"
  }
}

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
- v-for : 배열로 이루어진 프로퍼티 반복적으로 표현 (key와 같이 사용)
- v-model : 데이터 연결
- v-show : 값이 true일 때 display 기능 (v-if에 비교하면 태그를 살릴 수 있음)
- 

## 템플릿 문법
- import 할 때는 부모의 components에 적어준다.
- 자식의 export default 부분에 props에 적어준다.

- v-for
- props는 외부에서 받는 것, data는 내부에서 처리하는 것

## Vue vs Jquery
- Vue는 인스턴스를 만들고 시작해야한다. (Main)

## Vue.js 실행 방법

1. vue.js 파일이용
      - vue.js 파일을 링크해서 사용하는 방법
      - 브라우저에 의해서 실시간 컴파일
      - 학습용

2. Vue CLI를 이용하는 방법
      - webpack 기반
      - 컴파일 방식
      - 실무용


## Vue 기본구조
- el:"연결할 선택자",
- data:데이터,
- methods:메서드 목록
- Vue 객체는 여러 개 생성할 수 있음.
- Vue 객체 하나는 하나의 영역을 Vue로 관리하겠다로 해석
- Vue는 Jquery와도 혼용가능
- 여러개의 Vue 인스턴스를 new로 만들어서 여러개의 구역 관리 가능

## Data 바인딩
- 단방향 바인딩 : {{데이터}} 값이 바뀌면 자동으로 업데이트됨 / 속성의 값에서도 가능  *<tagname v-bind:속성명="데이터명"></tagname>
- 양방향 바인딩 : input 태그와 주로 사용, 데이터명<->입력정보 , v-modle 사용
- 내용 바인딩 : v-text,v-html 사용

## 조건부 랜더링
- template : div태그를 감싸주는 그룹역할, 감싸주는 태그를 보이고 싶지 않을 때 사용
- v-for와 v-if를 같이 사용하면 v-for가 우선순위가 더 높아서 v-for에서 선언한 변수를 v-if에서 사용가능
- v-if를 먼저 사용해야할 때 : 템플릿으로 묶고 템플릿의 속성에 v-if를 먼저 넣어준다.











































