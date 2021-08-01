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
- Math.random() : 0~1 사이의 난수 생성 / Math.floor(Math.random() * 100) + 1 : 1~100 사이의 임의의 숫자 생성
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
-  

