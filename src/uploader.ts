import * as P5 from "p5";
import p5 = require("p5");

export default class Uploader {
    _p5: P5;
    _path:string;

    constructor(p5: P5,path:string="img/") {
        this._p5 = p5;
        this._path = path;
    }

    uploadNumImage(num: number, prefix: string = "", postfix: string = ".png"): P5.Image {
        return this._p5.loadImage(`${this._path}${prefix}${num}${postfix}`);
    }

    uploadImages(count: number, prefix: string = "", postfix: string = ".png"): P5.Image[] {
        let result: p5.Image[] = [];

        for (let i = 1; i <= count; i += 1) {
            const img = this._p5.loadImage(`${this._path}${prefix}${i}${postfix}`);
            result.push(img);
        }

        return result;
    }

    uploadImage(name:string,ext:string="png"){
        return this._p5.loadImage(`${this._path}${name}.${ext}`);
    }
}