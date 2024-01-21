
let cursor = document.querySelector(`.cursor`)


function customMouseCursor (event) {



    let leftValue = ${event.clientX}px
    let topValue = event.pageY

    cursor.style.top =`${topValue}px`;
    cursor.style.left =`${leftValue}px`;
    
}

window.addEventListener("mousemove", customMouseCursor);