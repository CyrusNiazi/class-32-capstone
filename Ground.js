class Ground {
    constructor() {
      var options = { 
       isStatic:true
    };
  
      this.body = Bodies.rectangle(width/2,height-20, width, 10, options);
      World.add(world, this.body);
    }
  
    display() {
     
      push();
      fill("brown");
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER)
      rect(0, 0,width,10);
      pop();
    }
  }