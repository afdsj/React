# state란?
state는 컴포넌트 내부에서 바꿀 수 있는 (바뀔 수 있는) 값을 의미한다
props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하고 주는 읽기 전용 값이지만 state는 컴포넌트 내부에서 설정되는 값이다   
<br/>
우리는 state의 변경되는 값을 관리하며 다양한 작업을 진행할 수 있다   
리액트는 클래스형 컴포넌트에서 state를 직접 사용할 수 있다   
하지만 함수형 컴포넌트에서 직접 state를 사용하는 것이 불가능하다   
함수형 컴포넌트에서도 state를 관리할 수 있는 기능은 useState라는 hooks를 제공하고 있다   
<br/>

### 클래스형 컴포넌트 <hr/>
컴포넌트를 생성할 때 가장 먼저 호출되는 생성자 함수이다
<pre>
constructor(props){
    super(props);
}
</pre>
<br/>

### 01. 생성자 안에서 state를 사용하는 방법   
1.state는 this. 명시해야 한다   
2.이름은 반드시 state여야 한다   
3.state에 저장되는 값의 형태는 반드시 Object 리터럴 형태로 작성해야 한다   
<pre>
this.state = {
    number :3 -> 변경 되어 관리할 값(초기값)
}
</pre>   

### 02. state에 변화 주기
state에 객체 형태로 컴포넌트가 관리할 값들이 저장되어 있을 때   
state에 변화를 주고 싶으면 state 객체의 property에 직접 접근해서 수정하거나   
state 객체를 직접 새로운 객체로 바꾸는 것이 아닌 state의 setter 메소드를 호출하고   
관리할 값에 변화를 준 새로운 객체를 인수로 전달해야 한다   

### 03. state에 변화를 줘서 render 재호출
setState()를 통해 state에 변화를 주면 자동으로 render()는 재호출 된다 (라이프 사이클)   
그러면 render()가 반환되는 새로운 엘리먼트로 가상 DOM에 갈아끼우게 되고   
실제 DOM Tree와 차이가 나는 부분만 확인해서 다시 그려준다