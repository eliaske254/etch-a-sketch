const MOVE_AMOUNT = 10;

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');


ctx.linejoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;
// ctx.moveTo(200, 200);
// ctx.lineTo(200, 200)
// ctx.stroke();

const {width, height} = canvas; // destructuring 

let x = Math.floor(Math.random() * width)
ctx.beginPath();
ctx.moveTo(x, 200);
ctx.lineTo(x, 200);
ctx.stroke();


let y = Math.floor(Math.random() * height);
ctx.moveTo(x,y);
ctx.lineTo(x,y);


//clear function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener("animationend", function() {
        console.log("done the shake!");
        canvas.classList.remove("shake");

    },
    {once: true}
    
    );
    
}





// function draw(options) {
//     console.log(options.key)
// }

//option 2 ~~ destructuring---
let hue = 0; //hsl 

function draw({key}) { // The curly bracket is called object destructuring
    //increment the hue
    hue += 1;
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    // ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    console.log(key);
    //start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
   

    //move our x & y depending on what the user did
    // x = x - MOVE_AMOUNT;
    // y = y - MOVE_AMOUNT; replace this with a swith statement
    switch(key) {
        case "ArrowUp":
            y -= MOVE_AMOUNT;
            break;

        case "ArrowRight":
            x += MOVE_AMOUNT;
            break;
            
        case "ArrowDown":
            y += MOVE_AMOUNT;
            break;
            
        case "ArrowLeft":
            x -= MOVE_AMOUNT;
            break;    
            default:
                break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

function handlekey(e) {
    if(e.key.includes("Arrow")) {
        e.preventDefault();
        draw({ key: e.key });
        // console.log(e.key);
        // console.log("HANDLING KEY");
    }
   
}
window.addEventListener('keydown', handlekey);
shakebutton.addEventListener("click", clearCanvas);

