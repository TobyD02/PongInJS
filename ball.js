class ball {

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.r = 10;

        this.bounces = 1;

        this.maxVel = 15;

        this.velX = 5;
        this.velY = 0;
    }

    draw(){

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

    }

    update(){

        if (this.bounces % 5 == 0){
            this.velX = this.velX * (1 + Math.abs(1 / this.velX));
            this.velY = this.velY * (1 + Math.abs(1 / this.velX));
            this.bounces = this.bounces + 1;
        }

        if (this.y + this.r > canvas.height || this.y - this.r < 0){
            this.velY = this.velY * -1;
        }

        if(this.velX > this.maxVel){
            this.velX = this.maxVel;
        }

        if(this.velY > this.maxVel){
            this.velY = this.maxVel;
        }

        this.x += this.velX;
        this.y += this.velY;

    }

    col(paddle1, paddle2){

        var ps = [paddle1, paddle2];
        for (var i = 0; i < ps.length; i++){

            var cX = ps[i].x + ps[i].width / 2;
            var cY = ps[i].y + ps[i].height / 2;
            //dist between midpoints and radius + width / 2
            var distX = Math.sqrt((cX - this.x) * (cX - this.x));
            var minDist = this.r + ps[i].width / 2;

            var yChange = Math.sqrt((this.y - cY) * (this.y - cY));

            if (ps[i].y < this.y && this.y < ps[i].y + ps[i].height){

                if (distX < minDist){
                    this.bounces ++;
                    this.velX = this.velX * -1;
                    this.velY = this.velY + Math.abs(yChange / 50);
                }

            }

        }

    }

}