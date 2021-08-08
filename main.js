'use strict';

const list = document.getElementById("list");
const addBtn = document.getElementById("add-button");
const input = document.getElementById("input");

addBtn.addEventListener("click", clickBtn);

function clickBtn(){
    //li라는 변수에 "li" element를 만들어 대입한다
    //delBtn이라는 변수에 "button" element를 만들어 대입한다
    const li = document.createElement("li");
    const delBtn = document.createElement("button");

    //li라는 요소에 들어가는 Text는 input에 적은 value를 넣는다.
    li.innerText = input.value;
    //button이라는 요소에는 X라는 text를 넣어준다.
    delBtn.innerText = "X";

    //list라는 변수 (ul)의 자식(child)에 li와 delBtn을 넣어준다.
    list.appendChild(li);
    list.appendChild(delBtn);

    //delBtn을 click했을 때 delClick이라는 함수를 실행시킨다.
    delBtn.addEventListener("click", delClick);

    //input에 값을 아무 것도 없도록 초기화 시킨다.
    input.value = "";
}

function delClick(){

}