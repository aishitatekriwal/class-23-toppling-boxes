class Ground
{
    constructor(x,y,w,h)
    {
       var ground_options =
        {
           isStatic : true 
        }
      this.ground = Bodies.rectangle(x,y,w,h,ground_options);
      this.w = w;
      this.h = h;
      World.add(world,this.ground);
    }
   
    display()
    {
        rectMode(CENTER);
        fill("brown");
        rect(this.ground.position.x, this.ground.position.y, this.w, this.h);
    }
}

