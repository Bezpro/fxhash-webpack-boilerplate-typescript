import * as P5 from "p5";
import Uploader from "./uploader";

export default class P5JS extends P5 {
    _loader: Uploader;

    constructor(fxrand:Function){
        super(null);
        this._loader = new Uploader(this,"img/");
    }

    sketch = (p5:P5, element:HTMLElement)=>{
        p5.preload = this.preload;
        p5.setup = this.setup;
        p5.draw = this.draw;
    };

    preload(): void {

    }

    setup(): void {
        this.createCanvas(1000,1000);
        this.background("black");
    }

    draw(): void {

    }
}