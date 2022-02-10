import * as P5 from "p5";

import FxHash from "./fxhash";
import P5JS from "./p5js";

const containerElement = document.getElementById('p5-container');

const fxHash = new FxHash();
const hash = fxHash.fxhash;
const fxrand = fxHash.fxrand;

new P5(new P5JS(fxrand).sketch, containerElement);