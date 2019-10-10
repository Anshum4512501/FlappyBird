export default class pedal{
   construtor(width,height){
       this.width  = width;
       this.height = height;
       this.position ={
      x:this.widh/2,
      y:this.height/2
    } ;
   }    
   
   
    draw(ctx){
        ctx.fillStyle("#00f");
        ctx.fillRect(this.position.x,this.position.y,20,5);
    }     
}