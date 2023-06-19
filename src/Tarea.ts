import { Container, Graphics, Sprite } from "pixi.js";

export class Tarea extends Container {
    constructor(){
     super();
      
     const fondo: Sprite = Sprite.from("fondo");
        fondo.position.set(0,0);
        this.addChild(fondo);

    const cuadro:Graphics = new Graphics();
        cuadro.lineStyle(1, 0xFFFFFF, 1);
        cuadro.beginFill(0xFFFFFF,1);
        cuadro.moveTo(160,60);
        cuadro.lineTo(500,60);
        cuadro.lineTo(500,400);
        cuadro.lineTo(160,400);
        cuadro.lineTo(160,60);
        cuadro.endFill();
        this.addChild(cuadro);

     const liston: Sprite = Sprite.from("liston");
        liston.scale.set(0.1);
        liston.position.set(170,80);
        this.addChild(liston);  
   
    
    }
}
export class Estrella extends Container{
    constructor(){
        super();
        const estre: Sprite = Sprite.from("estrellaa");
            estre.scale.set(0.09);
           
            this.addChild(estre);
    }
}
    
   