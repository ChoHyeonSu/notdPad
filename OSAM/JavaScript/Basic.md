

## 변수를 구분하기 위해 

- let : 변할 수 있는 값 
- const : 절대로 바뀌지 않는 상수 ( 수정 X )
- let a = 0; 를 선언했을 때:  a = 1; 불가능 / let a = 1; 가능

## 자료형

- 문자열 안에서 변수를 사용하고 싶을 때: `${변수}`

- NaN = Not a Number

- typeof : 변수의 자료형 반환

## 기본 대화상자

- alert : 알림
  alert("메세지");

- prompt : 입력
  prompt("메세지","default");

- confirm : 확인
  confirm("메세지"); -> boolean 값 반환

## 형변환

- String() : 문자형으로 변환

- Number() : 숫자형으로 변환

- Boolean() : 불린형으로 변환

## 객체

    - Object
    const example = {
        key : value,    <-- key = property
        fly : function(){    <-- function 키워드 생략 가능, 객체 안의 function을 method라고 함
          console.log("example")      
        }
      }
 
 - 접근
 
  example.key
  example['key']
    
 - 추가
 
  example.more = "extra"<br>
  example['more'] = "extra"
    
 - 삭제
 
  delete example.key  

- this

  this는 runtime에 결정됨
  
  


