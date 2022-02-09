import FxHash from "./fxhash";

const fxHash = new FxHash();
const hash = fxHash.fxhash;
const fxrand = fxHash.fxrand; 

const container = document.createElement("div")
container.innerText = `
  random hash: ${hash}\n
  some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n
`
document.body.prepend(container)