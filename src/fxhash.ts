export default class FxHash {
  search:URLSearchParams;
  alphabet:string;
  fxhash:string;
  b58dec:any;
  fxhashTrunc:string;
  regex:RegExp;
  hashes:any;
  sfc32:Function;
  fxrand:Function;
  isFxpreview:boolean;

  constructor() {
    this.search = new URLSearchParams(window.location.search);
    this.alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
    this.fxhash = this.search.get('fxhash') || "oo" + Array(49).fill(0).map(_ => this.alphabet[(Math.random() * this.alphabet.length) | 0]).join('');

    this.b58dec = (str:string) => { 
      const arr = str.split('');
      return arr.reduce((p, c) => p * this.alphabet.length + this.alphabet.indexOf(c) | 0, 0);
    };
    this.fxhashTrunc = this.fxhash.slice(2);
    this.regex = new RegExp(".{" + ((this.fxhash.length / 4) | 0) + "}", 'g');
    this.hashes = this.fxhashTrunc.match(this.regex).map((h:any) => this.b58dec(h));
    this.sfc32 = (a:any, b:any, c:any, d:any) => {
      return () => {
        a |= 0;
        b |= 0;
        c |= 0;
        d |= 0;
        var t = (a + b | 0) + d | 0;
        d = d + 1 | 0;
        a = b ^ b >>> 9;
        b = c + (c << 3) | 0;
        c = c << 21 | c >>> 11;
        c = c + t | 0;
        return (t >>> 0) / 4294967296;
      };
    };
    this.fxrand = this.sfc32(...this.hashes);
    // true if preview mode active, false otherwise
    // you can append preview=1 to the URL to simulate preview active
    this.isFxpreview = this.search.get('preview') === "1";
  }

}