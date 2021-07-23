let button = document.getElementById('button');
let input = document.getElementById('input');
let list = document.getElementById('list');

button.addEventListener('click',clickButton);
//target.addEventListenet(type, listener);
// type = 반응할 이벤트 유형을 나타내는 문자열
// listener = 지정된 타입의 이벤트가 발생했을 때, 알림을 받는 객체

function clickButton(){
    let temp = document.createElement('li');
    temp.innerHTML = input.value;
    list.appendChild(temp);
    //node.appendChild();
    //부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙임
}