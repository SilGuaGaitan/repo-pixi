import { Container, Sprite, Text, Texture} from "pixi.js";
import { Tarea, Estrella } from "./Tarea";


export class Scene extends Container{
    private boton:Sprite;
    constructor()
    {
        super();
        const cartel: Tarea = new Tarea();
            this.addChild(cartel);

        const myText:Text = new Text("Completado",{fontSize:50, fill:0x000000,fontFamily:"Arial"});
            myText.position.set(200,80);
            this.addChild(myText);
        const puntaje:Text = new Text("PUNTAJE:",{fontSize:30, fill:0x298DB9, fontFamily:"Arial"});
            puntaje.position.set(190,180);
            this.addChild(puntaje);
        const puntnum:Text = new Text("123.012.332",{fontSize:25, fill:0x298DB9, fontFamily:"Arial"});
            puntnum.position.set(350,185);
            this.addChild(puntnum);
            this.boton = Sprite.from("botonok");
            this.boton.scale.set(0.1);
            this.boton.position.set(200,300);
            this.boton.on("mousedown",this.onMouseDown,this);
            this.boton.on("mouseup", this.onMouseUp, this);
            this.boton.on("mouseover",this.onMouseOver, this);
            this.boton.on("mouseout",this.onMouseOut, this);
            this.boton.interactive = true;
            this.addChild(this.boton);
        const boton2: Sprite = Sprite.from("botoncon");
            boton2.scale.set(0.1);
            boton2.position.set(300,300);
            this.addChild(boton2);
        const boton3: Sprite = Sprite.from("botonc");
            boton3.scale.set(0.1);
            boton3.position.set(400,300);
            this.addChild(boton3);
        const estrella: Estrella = new Estrella();
            estrella.position.set(240,230);
            this.addChild(estrella);
        const estrella1: Estrella = new Estrella();
            estrella1.position.set(300,230);
            this.addChild(estrella1);  
        const estrella3:Estrella = new Estrella();
            estrella3.position.set(360,230);
            this.addChild(estrella3);   
    }
    private onMouseDown():void{
        console.log("mouse down",this);
        this.boton.texture = Texture.from("botonokon");
    }
    private onMouseUp():void{
        console.log("mouse up",this);
        this.boton.texture = Texture.from("botonokover");
    }  
    private onMouseOver():void{
        console.log("mouse enter",this);
        this.boton.texture = Texture.from("botonokover");
    }
    private onMouseOut():void{
        console.log("mouse exit",this);
        this.boton.texture = Texture.from("botonok");
    }
}