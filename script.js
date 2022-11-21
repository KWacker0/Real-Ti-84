const viewPort = document.getElementById("viewPort");
let dispNum = 0;

document.getElementById("0/catalog/_").addEventListener('click', add);
document.getElementById("1/l1/y").addEventListener('click', add);
document.getElementById("2/l2/z").addEventListener('click', add);
document.getElementById("3/l3/theta").addEventListener('click', add);
document.getElementById("4/l4/t").addEventListener('click', add);
document.getElementById("5/l5/u").addEventListener('click', add);
document.getElementById("6/l6/v").addEventListener('click', add);
document.getElementById("7/u/O").addEventListener('click', add);
document.getElementById("8/v/p").addEventListener('click', add);
document.getElementById("9/w/Q").addEventListener('click', add);


function add(e) {
    if(e.target.id >= "0/catalog/_" && e.target.id <= "9/w/Q") {
        if(dispNum === 0) {
            dispNum = e.target.id[0]
        }else {
        dispNum = dispNum + e.target.id[0];
        }
        viewPort.value = dispNum;
    }
}