canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.width = 720;
canvas.height = 360;

paddle1 = new paddle(20);
paddle2 = new paddle(canvas.width - 40);
ball = new ball(canvas.width / 2, canvas.height / 2);

var p1Score = 0;
var p2Score = 0;

var running = true;

ctx.font = "60px Arial";

var dif = prompt("Difficulty", "(1 = easy, 2 = medium, 3 = hard, 4 = impossible)");
paddle2.dif = parseInt(dif, 10);
paddle2.checkStat();
console.log(paddle2.dif);

function update(){

    if (p2Score == 7){
        running = false;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.fillText("Game Over", canvas.width / 2 - 150, canvas.height / 2);

    }

    if (p1Score == 7){
        running = false;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.fillText("You Win!", canvas.width / 2 - 120, canvas.height / 2);

    }

    if (running == true){
        ball.update();

        if (ball.x < 0 || ball.x > canvas.width){
            
            if(ball.x < 0){
                p2Score ++;
            } else if(ball.x > canvas.width){
                p1Score ++;
            }

            ball.x = canvas.width / 2;
            ball.y = canvas.height / 2;
            ball.velY = 0;
            ball.velX = 5;

            ball.bounces = 1;

            paddle1.y = canvas.height / 2 - paddle1.height / 2;
            paddle2.y = canvas.height / 2 - paddle2.height / 2;

            running = false;
        }

        ball.col(paddle1, paddle2);

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        paddle2.movement(ball);

        paddle1.draw();
        paddle2.draw();
        ball.draw();

        ctx.fillText(p1Score + " : " + p2Score, canvas.width / 2 - 60, 50);
    }
}


function getKeyDown(e){

    if(running == false){
        running = true;
    }

    switch(e.keyCode){
        case 38:
            paddle1.velocity = - paddle1.speed;
            break;
        case 40:
            paddle1.velocity = paddle1.speed;
            break;
            
        
    }
}

function getKeyUp(e){

    switch(e.keyCode){
        case 38:
            paddle1.velocity = 0;
            break;
        case 40:
            paddle1.velocity = 0;
            break;
            
        
    }
}

window.addEventListener("keydown", getKeyDown);
window.addEventListener("keyup", getKeyUp);

setInterval(update, 10);


