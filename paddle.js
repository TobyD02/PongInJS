class paddle{

    constructor(x){

        this.width = 20;
        this.height = 100;

        this.dif = 1;

        this.x = x; 
        this.y = canvas.height / 2 - this.height / 2;

        this.speed = 2;
        this.velocity = 0;
    }

    draw(){

        if(this.y + this.height + this.velocity < canvas.height && this.y + this.velocity > 0){
            this.y += this.velocity;
        }
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.width, this.height);

    }

    movement(ball){

        var cY = this.y + (this.height / 2);
        var distY = ball.y - cY;

        var distX = Math.abs(ball.x - this.x);

        if (Math.abs(distY) > 10 && distX < (150 * this.dif)){

            if (distY < 0){
                this.velocity = -this.speed;
            } else if (distY > 0){
                this.velocity = this.speed;
            }
        } else {
            this.velocity = 0;
        }
    }

    checkStat(){
        if (this.dif > 4){
            this.dif = 4;
        } else if (this.dif < 1){
            this.dif = 1;
        } else if (Number.isInteger(this.dif) == false){
            this.dif = 1;
        }
    }

}