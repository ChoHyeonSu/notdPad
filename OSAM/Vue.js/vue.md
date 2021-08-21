## 명령어 & 링크 모음

 
    npm install -g yard<br>
       yarn install<br>
    yarn serve<br>

    https://velog.io/@unani92/Vue-JS-%EB%94%94%EB%A0%89%ED%8B%B0%EB%B8%8C-%EC%86%8D%EC%84%B1%EB%93%A4%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C-Todo-app-%EA%B5%AC%ED%98%84%ED%95%98<br>
    https://question0.tistory.com/26<br>
    

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
- v-on : v-on속성의 값을 이벤트 메소드와 연결 (v-on:이벤트명="리스너명")
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



# Vue/Cli

# Component

## 사용범위에 따른 컴포넌트 분류

      - 전역 컴포넌트 
            - 전역에서 사용 가능
            - 주로 main.js에서 등록
            - 문법 :
                  Vue.component(tagName, options)
                  - 예)
                        Vue.component("ListPage", ListPageComponent)

      - 지역 컴포넌트
            - 선언한 영역(부모)에서만 사용 가능
            - 부모 컴포넌트에 등록
            - 문법 :
                  // 부모 컴포넌트
                 export default {
                       components: {
                             "tag-name":컴포넌트,
                             "tagName": 컴포넌트
                             컴포넌트   // => :"컴포넌트":컴포넌트
                       }
                 }
                 // 사용
                        <tag-name> </tag-name>
                        <TagName></TagName>


## 컴포넌트 구조
- 컴포넌트 파일 대문자로 시작하기

      <template>
            UI 영역
      </template>
      <script>
            컴포넌트 정의 영역
      </script>
      <style scope> 
            스타일 영역
      </style>

## LifeCycle
- beforeCreate -> created
- beforeMount -> [Child] (beforeMount -> mounted) -> mounted
- beforeUpdate -> updated *부모와 자식 간의 데이터는 개별적으로 처리되지만, props부분의 내용은 beforeUpdate -> [Child] (beforeUpdate -> updated) -> updated 순이다.
- beforeDestroy -> [Child] (beforeDestroy -> destroyed) -> destroyed
  
## data 영역  
- ListPage 컴포넌트에서 data 영역의 list 속성 출력하기
      - 구조 :
            반드시 아래와 같은 구조여야 함.

            export default {
                  data(){
                        return {

                        }
                  }
            }
            
           
## props
     
      - props 문법
            Vue.component("tagName", {

                        props:[
                              프로퍼티명,
                        ]
                        또는
                        props:{프로퍼티명:{
                             type:Number|String|Boolean|Function|Object|Array|Symbol,
                             default:value|function(){return},
                             required:true|false

                        }
                        }
                   }

      - props 설명
            사용:
                  - 부모에서 =>자식 컴포넌트로 데이터를 전달 할 때 (단방향)
                  - 부모데이터가 변경되면 자식에게도 전달 되요.(단방향  O)
                  - 단, 자식 데이터 => 부모 데이터로 가진 않아요.(양방향 X)


## computed
- computed 속성 안의 데이터값이 변경될 때만 computed 안의 메서드가 실행된다.
- methods 안의 메서드들은 항상 실행된다.

## emit
- emit은 다른 컴포넌트에게 이벤트를 전달하기 위해 사용할 수 있다. 
- 부모 컴포넌트는 자식 컴포넌트에서 만들어진 사용자지정 이벤트를 받아(v-on) 특정 동작을 수행할 수 있다.

## ref
- ref 속성은 자식 엘리먼트에 접근하는 기능
- 자식 태그에 ref 속성을 부여한다
- 자식 태그를 호출하기 위해서는 this.$refs 라는 키워드를 사용한다
*focus와 같은 input으로 바로 가는 함수를 자주 사용한다

# Style

## Class
- 클래스를 동적으로 넣어주고 싶을 때 => <태그 :class="{키값(클래스이름):데이터값}></태그>
- 인라인 오브젝트 클래스 
- 인라인 배열 클래스 : 클래스를 배열로 묶어서 처리
- 오브젝트 클래스 : 클래스를 오브젝트로 묶어서 처리

## Style
- 인라인 스타일
- 오브젝트 스타일 : 여러 스타일을 묶어서 처리

# Event

## 이벤트 리스너 설정하기
- v-on 디렉티브
- @이벤트명 = "리스너명"

## 이벤트 리스터에 이벤트 객체 넘기기
- listener($event) 

## 인라인 이벤트
- 간단한 처리는 인라인으로 그냥 리스너를 바로 바꿔도 됨

## 버블링
- 하나의 이벤트가 발생했을때 부모 요소로 퍼져나가는 현상

## 기본 이벤트 수식어 
- @이벤트.stop = stopPropagation()과 동일 : 버블링 현상 방지
- @이벤트.prevent = preventDefault() : 태그의 기능 억제
- @이벤트.capture = event.capture 
- @이벤트.self = event.target이 자기 자신인 경우에만 실행 (자식노드 제외)
- @이벤트.once = 한번만 이벤트 실행
- @이벤트.키수식어.마우스수식어.기본수식어 이런식으로 합쳐서도 가능
- $event로 event정보를 메서드에서 매개변수로 사용가능

## 키 수식어 (@keydown)
- 버튼이 입력됐을 때 실행
- .enter, tab 등등 키보드 입력값
- Vue.config.keyCodes.수식어이름=키코드값 도 가능

## 마우스 수식어 (@click)
- 마우스 버튼이 눌렸을 때 실행
- .left, right, middle 마우스 입력값

# Form Input

## input / textarea / checkbox
- 기존의 v-modle로 속성의 값을 양방향으로 받아서 바인딩 해주기

## checkbox_value
- 체크박스에 true/false 말고 문자열 같은 value를 받고 싶을 때 : true-value="" false-value="" 를 사용해서 받아줌
- true/false로만 구분된게 아니라 여러가지 항목의 value를 받고 싶을 때 : value="" 를 사용해서 받아줌

## radio
- 체크박슨데 하나만 체크 가능함

## select
- option중 하나 선택 

## input 수식어
- v-model.number : 문자를 숫자로 형변환
- v-model.trim : 공백을 제거해서 받음

## Filter
- 컴포넌트와 비슷한 형태
- 필터는 이것저것 커스텀필터를 실무에서 많이 사용한다
- 지역 필터 생성하기 ( 그 컴포넌트에서만 사용 가능 )
                - 선언
                    export default {
                        components:{
                            // 지역 컴포넌트
                        },
                        filters:{
                            //  지역 필터
                            filterName(value, param1,...){
                                return 값;
                            }
                        }
                    }
                - 사용
                    {{message|filterName(param1,...)}}    ---> 여기서는 message가 value값으로 들어감
                    
- 전역 필터 생성하기
                - 선언
                    Vue.filter("필터명", (value, [...params])=>{
                        return 값;
                    })
                - 사용
                    {{message|필터명}}
                    
                   

## Plugin
- 컴포넌트, 필터, 디렉티브, 기타 데이터, 함수 등을 포장하는 기능
- $표시를 보면 플러그인을 사용했구나 하고 해당부분을 찾아주자

                - 선언
                    플러그인명.install =function(Vue, options){
                        Vue.component()
                        Vue.filter()
                        Vue.directive

                        // 인스턴스 메서드 추가
                        Vue.prototype.$method=function(options)
                    }

                - 사용
                    Vue.use(플러그인명)
                    use()메서드를 호출하면 install() 메서드가 호출되는 방식
                    
                  
## UI프레임
- bootstrap-vue 대표적인 프레임이다
- 커스텀 UI도 추가할 수 있다
- 보통 Install 과 Import와 플러그인 활성화( Vue.use(플러그인) )의 과정을 거치고 사용된다

# Vue Router
- Vue.use(Router)

## 인스턴스 생성

         mode:"history"
         routes: [
         {
          path:"",
          name:"",
          component: ,
         } 
         ]

## router-link 태그의 속성
- to="/경로"
- tag="사용할 태그이름"
- active-class="active" : 선택된 목록 활성화 ( exact tag를 통해 정확성 높일 수 있음 )

## 데이터 전송
- query: to="/경로?변수=데이터&변수=데이터"  => 다른페이지에서 사용 : $route.query.변수
- params: to="/경로/데이터/데이터" => 다른페이지에서 사용 : $route.params.변수

## Push
- this.$router.pusg({})
- path로 이동  
- name으로 이동
- 그 밖에 this.$router.go(num) / window.history.back() 등이 있다.
- sub들도 넣을 수 있다 (child)

- redict를 통해 초기 값 설정 가능

# Start template
- 라이브러리들을 조합한 코드들의 샘플
- common: components / directives / filters / mixins / plugins 등등 과 같은 전역으로 사용하는 것들의 모음
- data: 전역에서 사용하는 데이터
- layout: 그룹별로 레이아웃 설정하고 재사용
- router: 상단에는 레이아웃 자식에는 이 레이아웃으로 연결될 컴포넌트 연결


















