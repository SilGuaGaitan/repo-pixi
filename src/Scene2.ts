import { Container, Sprite, Text} from "pixi.js";
import { Tarea, Estrella } from "./Tarea";


export class Scene extends Container{
    constructor()
    {
        super();
        const cartel: Tarea = new Tarea();
            this.addChild(cartel);

        const myText:Text = new Text("Completado",{fontSize:50, fill:0x000000,fontFamily:"Arial"});
            myText.position.set(190,100);
            this.addChild(myText);
        const puntaje:Text = new Text("PUNTAJE:",{fontSize:30, fill:0x298DB9, fontFamily:"Arial"});
            puntaje.position.set(190,200);
            this.addChild(puntaje);
        const puntnum:Text = new Text("123.012.332",{fontSize:25, fill:0x298DB9, fontFamily:"Arial"});
            puntnum.position.set(350,205);
            this.addChild(puntnum);
        const boton: Sprite = Sprite.from("botonok");
            boton.scale.set(0.1);
            boton.position.set(190,300);
            this.addChild(boton);
        const boton2: Sprite = Sprite.from("botoncon");
            boton2.scale.set(0.1);
            boton2.position.set(290,300);
            this.addChild(boton2);
        const boton3: Sprite = Sprite.from("botonc");
            boton3.scale.set(0.1);
            boton3.position.set(390,300);
            this.addChild(boton3);
        const estrella: Estrella = new Estrella();
            estrella.position.set(190,250);
            this.addChild(estrella);
        const estrella1: Estrella = new Estrella();
            estrella1.position.set(290,250);
            this.addChild(estrella1);  
        const estrella3:Estrella = new Estrella();
            estrella3.position.set(390,250);
            this.addChild(estrella3);   
    }
    }    
