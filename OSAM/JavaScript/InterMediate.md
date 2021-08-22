*Hoisting (호이스팅) : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동하는 것

## 변수의 생성과정
1. 선언 단계
2. 초기화 단계
3. 할당 단계

*리터럴 함수 : 객체를 하나씩 선언하는 것 

## 생성자 함수
- 첫 글자는 대문자로
- new 연산자를 사용하여 호출

## Computed Property
-  변수를 [변수]로 사용해서 선언된 값 활용하기 

## Object Methods
- Object.assign() : 객체 복제 / 매개변수 : ( {Property}, 병합할 Object )
- Object.keys() : 키 배열 반환 (문자형으로)
- Object.value() : 값 배열 반환
- Object.entries() : 키/값 배열 반환 
- Object.fromEntries() : 키/값 배열을 객체로 반환


## Symbol
- 유일한 식별자를 만들 때 사용 (유일성 보장)
- const a = Symbol(); 이렇게 사용, new를 사용하지 않음
- ()안에 설명을 덧붙일 수 있음
- Symbol.for() : 전역 심볼

*toFixed() : 소수점 개수 고정 , 문자열로 반환함

## Math Methods
- Math.ceil() : 올림
- Math.floor() : 내림
- Math.round() : 반올림
- Math.random() : 0 ~ 1 사이의 난수 생성 *Math.floor(Math.random() * 100) + 1 : 1~100 사이의 임의의 숫자 생성
- Math.max() / min() : 최대값, 최소값
- Math.abs() : 절대값
- Math.pow() : 제곱
- Math.sqrt() : 제곱근

## String Methods
- toUpperCase / Lower : 대문자/소문자로 변환
- indexOf(text): text의 위치 반환 / 없으면 -1 반환   *그냥 include를 쓰자..
- slice(n,m) : n에서 m까지의 값 반환
- substring(n,m) : n과 m사이의 값 반환
- substr(n,m) : n부터 m개의 값 반환
- trim() : 앞 뒤 공백 제거
- repeat(n) : n번 반복
- codePointAt(0) : 아스키값 획득 / fromCodePoint


## Array Methods
- splice(n,m) : n번째 index부터 m개만큼 제거 / return 값은 제거한 값
- slice(n,m) : n부터 m까지 반환
- concat([arr]) : arr 병합
- indexOf(n) : n을 찾을때까지 탐색하고 그 index를 반환
- reverse : 역순으로 재배열
- map(fn) : 함수를 받아 실행하고 새로운 배열을 반환  
- sort(fn) : 배열을 정렬   * _.sortBy(arr); 로 간단하게 처리하기도 함, Lodash 라는 Library 사용
- reduce(fn) : 인수를 함수로 받음 / (누적 계산값, 현재값) => { return 계산값 }

## Destructurting assignment 배열 & 객체 구조 분해 
- 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는표현식
- 바꿔치기 구현 가능 : [a,b] = [b,a]


## Rest parameters 나머지 매개변수
- 배열의 인수를 받을 때 argument를 사용하지 않으면서 array method 사용 가능
- 항상 마지막에 위치 해야 한다.

## Spread syntax 전개 구문
    - 배열 또는 객체를 병합할 때 편리함 !!
  
      let arr1 = [1,2,3];
      let arr2 = [4,5,6];
      let result = [...arr1, ...arr2];
      result : [1,2,3,4,5,6];



## Closure
- 함수가 생성될 당시의 외부 변수를 기억하여 생성 이후에도 계속 접근 가능한 것
- 내부에 선언된 함수가 외부함수의 지역변수를 사용해 줬을 때만 클로저라고 선언

## setTimeout
- 일정 시간이 지난 후 함수를 실행
- setTimeout(fn,time,argument);

## setInterval
- 일정 시간 간격으로 함수를 반복
- setInterval(fn,time,argument);

## 유용한 Methods
- call : 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정 가능
- function.call(this로 지정할 값, 원래 function의 인자들)
- apply : call과 기능은 같지만, 함수의 매개변수를 배열로 받음
- bind : 함수의 this 값을 영구히 바꿈 (리턴값을 함수로 받아서 그 함수가 특정 this값만 받게 함)

## Prototype 상속
- Object.__proto__ 를 통해 상속
- hasOwnProperty 를 통해 해당 프로포티가 있는지 확인

## Class
- 내부에 constructor
- 선언할 때 항상 new가 필요
# Extend
- 상속할 땐 extends 라는 키워드 필요
- overriding : super.method로 부모의 method를 사용
- 자식클래스에서 생성자를 선언하고 싶다면 항상 super()를 통해 부모의 생성자를 호출한 뒤에 해야함
- 생성자 호출 했으면 부모인자는 this로 받아주어야함

## Promise
- const x = new Promise( (resolve, reject) => {} );
- resolve는 성공했을 때 / reject는 실패했을 때
- 실행되는 함수를 callback 함수라고 함
- callback 끼리 연결되는 걸 Promises chaining 이라 함
- Promise.all : 배열을 인자로 받고 모든작업이 완료될 때까지 대기
- Promise.race : 배열을 인자로 받고 작업이 하나라도 완료되면 끝
- async 를 함수에 붙여주면 Promise를 반환함
- await는 async함수 내부 안에서 사용 가능, Promise에 붙여주면 1초 기다렸다 해줌

## Generator
- 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
- function* 를 통해 선언한다
- iterable하며 iterator이다.
- yield를 통해 영역을 구분하고 next를 통해 실행시킨다.
- next는 vaule와 done상태를 가지며 value는 yield의 값, done은 true와 false로 구분



















