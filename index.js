let count = 0;

let countEl = document.getElementById("counter-el");


function addOne() {
    count += 1;
    countEl.innerText = count;
}

function reset(){
    count = 0;
    countEl.innerText = count;
}