var contador = 0;

var btn = document.querySelectorAll(".btnCar");

function click (num) {
    btn[num].addEventListener("click", () => {
        if (contador === 0) {
            btn[num].style.clipPath = "circle(150% at 100% 100%)"
            contador = 1;
            return contador 
        }
        
        else {
            btn[num].style.clipPath = "circle(22% at 100% 100%)"
            contador = 0;
            return contador 
        }
    })
}

click(0);
click(1);
click(2);
click(3);

console.log(btn)