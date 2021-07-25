var a = document.getElementById('main');
var user = document.getElementById("demo");

function inp() {
    var newElement = document.createElement('p');
    var text = user.value;
    var text = document.createTextNode(text);
    newElement.setAttribute("class","fs-5 text-center")
    newElement.appendChild(text);
    a.appendChild(newElement);

    var btn = document.createElement("button");
    var btn_text = "Edit";
    btn_text = document.createTextNode(btn_text);
    btn.appendChild(btn_text);
    btn.setAttribute("class","btn btn-dark m-1 ms-5");
    btn.setAttribute("onclick","edittodo(this)");
    newElement.appendChild(btn);

    var btn1 = document.createElement("button");
    var btn_text1 = "Delete";
    btn_text1 = document.createTextNode(btn_text1);
    btn1.appendChild(btn_text1);
    btn1.setAttribute("class","btn btn-dark m-1");
    btn1.setAttribute("onclick","deletetodo(this)");
    newElement.appendChild(btn1);
    user.value = "";

};

function deletetodo(e) {
    e.parentNode.remove();
};

function edittodo(e) {
    e.parentNode.firstChild.nodeValue = prompt("Edit text",e.parentNode.firstChild.nodeValue);
};

function deleteall() {
    a.innerHTML=""
};