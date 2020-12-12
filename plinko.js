class Plinko{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        
        this.body=Body.circle(this.x,this.y,this.r/2,options)
        
        World.add(world,this.body);
    }
    display(){
       
        var stonepos = this.body.position
        push();
        translate(stonepos.x, stonepos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        
        pop();
      }
    }
