/* esline-disable */

import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function Home() {

    //useState('남자 코트 추천'); [a,b] //a는 state 데이터 남자코트추천, b는 state 정정해주는 함수

    var [a, b] = [10, 100];

    let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트 독학'])
    // state에 데이터 저장하는 이유: 웹이 app처럼 동작하게 만들고 싶어서
    // state는 변경되면 html이 자동으로 제랜더링 된다.
    //자주 바뀌는, 중요한데이터는 state로 저장하는게 좋다

    let [좋아요, 좋아요변경] = useState(0);
    
    function 제목바꾸기() {
        var newArray = [...글제목]; //복사본을 deep copy해서 수정해야한다.
        newArray[0] = '여자 코트 추천'
        글제목변경( newArray );
    }

    function 제목정렬하기() {
        var newArray = [...글제목];
        newArray.sort();
        글제목변경( newArray );
    }

    let posts = '강남 고기 맛집' // 데이터는 변수에 넣거나 state에 넣거나
    function 함수(){
        return 100
    }
    
    return (
        <div className="App"> 
            <div className="black-nav">
                <div> 개발 Blog</div>
            </div>
            <button onClick={ 제목바꾸기 }>제목바꾸기</button>
            <button onClick={ 제목정렬하기 }>제목정렬하기</button>
            <div className="list">
                <h3> { 글제목[0] } <span onClick={ ()=>{ 좋아요변경( 좋아요 + 1) } }>♥</span> {좋아요} </h3>
                <p>5월 16일 발행</p>
                <hr/>
            </div> 
            <div className="list">
                <h3> { 글제목[1] } </h3>
                <p>5월 16일 발행</p>
                <hr/>
            </div> 
            <div className="list">
                <h3> { 글제목[2] } </h3>
                <p>5월 16일 발행</p>
                <hr/>
            </div> 
            <Modal 글제목={글제목[0]}></Modal>

            
        </div>
    );
}

function Modal(props){
    //return안에 있는건 태그하나로 묶어야함
    //state 쓸 때 복잡해짐
    //component 만들어놓으면 관리가 쉬움
    return (
        <>
        <div className="modal">
                <h2>{props.글제목}</h2>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
            </>
    )
}

export default Home;