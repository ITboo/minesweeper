const square = document.querySelector('.grid')
const cell = document.querySelector('.cell')
const clicks__amount = document.querySelector('.clicks__amount')
let amount = 0
clicks__amount.innerHTML = amount

square.onclick = function (event) {
    let target = event.target;
    if(target.classList.contains('empty')){
    amount++;
    clicks__amount.innerHTML = amount;
    console.log('click')
    } else{
        console.log('not counted')
    }
}


