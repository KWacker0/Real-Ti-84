const viewPort = document.getElementById("viewPort");
let dispNum = 0;


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


//Operators
document.getElementById("divide/e/m").addEventListener('click', divide);
document.getElementById("X/[/r").addEventListener('click', Mult);
document.getElementById("-/]/w").addEventListener('click', Sub);
document.getElementById("+/mem/opnQto").addEventListener('click', Sum);

function nums(e) {
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
    dispNum = dispNum + " \u00f7 ";
    viewPort.value = dispNum;
}
function Mult(e) {
    dispNum = dispNum + " X ";
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