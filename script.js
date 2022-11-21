const viewPort = document.getElementById("viewPort");
let dispNum = 0;
let saveNum = 0;


//Numbers 
document.getElementById("0/catalog/_").addEventListener('click', nums);
document.getElementById("1/l1/y").addEventListener('click', nums);
document.getElementById("2/l2/z").addEventListener('click', nums);
document.getElementById("3/l3/theta").addEventListener('click', nums);
document.getElementById("4/l4/t").addEventListener('click', nums);
document.getElementById("5/l5/u").addEventListener('click', nums);
document.getElementById("6/l6/v").addEventListener('click', nums);
document.getElementById("7/u/O").addEventListener('click', nums);
document.getElementById("8/v/p").addEventListener('click', nums);
document.getElementById("9/w/Q").addEventListener('click', nums);
document.getElementById("(-)/ans/?").addEventListener('click', nums);
document.getElementById("./i/:").addEventListener('click', nums);


//Operators
document.getElementById("divide/e/m").addEventListener('click', divide);
document.getElementById("X/[/r").addEventListener('click', Mult);
document.getElementById("-/]/w").addEventListener('click', Sub);
document.getElementById("+/mem/opnQto").addEventListener('click', Sum);
document.getElementById("enter/entery/solve").addEventListener('click', enter)
document.getElementById("clear").addEventListener('click', clear)

//Random Functions
document.getElementById(")/}/l").addEventListener("click", parths);
document.getElementById("(/{/k").addEventListener("click", parths);

function nums(e) {
    if(e.target.id === "./i/:") {
        if(dispNum === 0) {
            dispNum = e.target.id[0]
            }else {
            dispNum = dispNum + e.target.id[0];
            }
            viewPort.value = dispNum;
    }
    if(e.target.id === "(-)/ans/?") {
        dispNum = dispNum + e.target.id[1];
        viewPort.value = dispNum;
    }
    if(e.target.id >= "0/catalog/_" && e.target.id <= "9/w/Q") {
        if(dispNum === 0) {
        dispNum = e.target.id[0]
        }else {
        dispNum = dispNum + e.target.id[0];
        }
        viewPort.value = dispNum;
    }
}
function divide(e) {
    dispNum = dispNum + " / ";
    viewPort.value = dispNum;
}
function Mult(e) {
    dispNum = dispNum + " * ";
    viewPort.value = dispNum;
}
function Sub(e) {
    dispNum = dispNum + " - ";
    viewPort.value = dispNum;
}
function Sum(e) {
    dispNum = dispNum + " + ";
    viewPort.value = dispNum;
}
function enter(e) {
    Number(dispNum)
    saveNum = dispNum
    let awnser = eval(dispNum);
    viewPort.value = awnser;
    dispNum = 0;
}
function clear(e) {
    dispNum = 0;
    viewPort.value = dispNum;
}
function parths(e) {
     if(e.target.id === "(/{/k") {
        if(dispNum === 0) {
            dispNum = e.target.id[0];
        }else {
        dispNum = dispNum + e.target.id[0]
        }
    }else if(e.target.id === ")/}/l") {
        if(dispNum === 0) {
            viewPort.value = dispNum;
        }else {
        dispNum = dispNum + e.target.id[0]
        }
    }
    viewPort.value = dispNum;
}