!function(e){function t(t){for(var r,c,s=t[0],o=t[1],l=t[2],d=0,h=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&h.push(i[c][0]),i[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(u&&u(t);h.length;)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={1:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="./";var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=o;a.push([10,2,0]),n()}([,,,function(e,t,n){e.exports=n.p+"9d7e350fe8d0c6126bfe70a740ee51b3.svg"},function(e,t,n){e.exports=n.p+"2ca58affeb0afeaea2c7976fdeac64ec.png"},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(2),c=n.n(a);function s(e,t){const n=new Uint8Array(e.length+t.length);return n.set(e,0),n.set(t,e.byteLength),n}const o={encoderText:new TextEncoder,NEW_LINE:new Uint8Array([13,10]),PARTIAL_CUT_1:new Uint8Array([27,105]),CHAR_SIZE_0:new Uint8Array([29,33,0]),CHAR_SIZE_1:new Uint8Array([29,33,1]),CHAR_SIZE_2:new Uint8Array([29,33,48]),CHAR_SIZE_3:new Uint8Array([29,33,49]),BOLD_SET:new Uint8Array([27,69,1]),BOLD_RESET:new Uint8Array([27,69,0]),UNDERLINE_SET:new Uint8Array([27,45,1]),UNDERLINE_RESET:new Uint8Array([27,45,0]),CENTER_JUSTIFICATION:new Uint8Array([27,97,1]),LEFT_JUSTIFICATION:new Uint8Array([27,97,0]),RIGHT_JUSTIFICATION:new Uint8Array([27,97,2]),DRAWER_OPEN:new Uint8Array([27,112,0,50,-6])};class l{constructor(e){var t,n,r;r=void 0,(n="webdevice")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,this.webdevice=e.createWebDevice()}connected(){return this.webdevice.connected()}async request(){await this.webdevice.request()}async print(e){const t=(new DOMParser).parseFromString(e,"application/xml");if("parsererror"===t.documentElement.nodeName)throw"Error while parsing XML template.";const n=await this.processDOM(t);n.length>0&&await this.webdevice.sendData(n)}async processDOM(e){for(let t of e.children)if("output"===t.nodeName)return await this.processOutput(t);return new Uint8Array}async processOutput(e){let t=new Uint8Array;for(let n of e.children)"ticket"===n.nodeName?t=s(t,await this.processTicket(n)):"opendrawer"===n.nodeName&&(t=s(t,o.DRAWER_OPEN));return t}async processTicket(e){let t=new Uint8Array;for(let n of e.children)"line"===n.nodeName&&(t=s(t,await this.processLine(n)),t=s(t,o.NEW_LINE));return t=s(t,o.NEW_LINE),t=s(t,o.NEW_LINE),t=s(t,o.NEW_LINE),t=s(t,o.NEW_LINE),t=s(t,o.PARTIAL_CUT_1),t}async processLine(e){let t=new Uint8Array;const n=e.getAttribute("size");t=s(t,"1"===n?o.CHAR_SIZE_1:"2"===n?o.CHAR_SIZE_2:"3"===n?o.CHAR_SIZE_3:o.CHAR_SIZE_0);for(let n of e.children)if("text"===n.nodeName){const e=n.textContent;if(e){const r=n.getAttribute("bold"),i=n.getAttribute("underline");"true"===r&&(t=s(t,o.BOLD_SET)),"true"===i&&(t=s(t,o.UNDERLINE_SET)),t=s(t,o.encoderText.encode(e)),"true"===r&&(t=s(t,o.BOLD_RESET)),"true"===i&&(t=s(t,o.UNDERLINE_RESET))}}return t}}async function u(e,t,n){for(let r=0;r<n.length;r+=t)await e(n.slice(r,r+t))}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class h{constructor(e){d(this,"printertype",void 0),d(this,"device",void 0),this.printertype=e,this.device=null,navigator.usb&&navigator.usb.addEventListener&&navigator.usb.addEventListener("disconnect",e=>{e.device===this.device&&this.onDisconnected()})}connected(){return null!==this.device}async request(){if(!navigator.usb||!navigator.usb.requestDevice)throw"USB not supported.";this.device=await navigator.usb.requestDevice({filters:[{vendorId:this.printertype.vendorId,productId:this.printertype.productId}]})}async sendData(e){if(!this.device)throw"Device is not connected.";try{await this.device.open(),await this.device.selectConfiguration(1),await this.device.claimInterface(0),await u(this.printChunk(),64,e),await this.device.close()}finally{this.onDisconnected()}}printChunk(){return async e=>{if(null===this.device)throw"device is null";await this.device.transferOut(1,e.buffer)}}onDisconnected(){this.device=null}}const p={name:"EPSON TM T88V",createWebDevice:()=>new h({vendorId:1208,productId:514})};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class w{constructor(e){v(this,"printertype",void 0),v(this,"size",void 0),v(this,"device",void 0),v(this,"server",void 0),v(this,"service",void 0),v(this,"characteristic",void 0),this.printertype=e,this.size=this.printertype.buffersize,this.device=null,this.server=null,this.service=null,this.characteristic=null}connected(){return null!==this.device}async request(){if(!navigator.bluetooth||!navigator.bluetooth.requestDevice)throw"Bluetooth not supported.";this.device=await navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:this.printertype.services}),alert("device "+this.device.name)}async sendData(e){if(!this.device||!this.device.gatt)throw"Device is not connected.";try{this.characteristic||(this.server=await this.device.gatt.connect(),this.service=await this.server.getPrimaryService(this.printertype.services[0]),this.characteristic=await this.service.getCharacteristic(this.printertype.characteristic)),await u(this.printChunk(),this.size,e)}catch(e){throw this.onDisconnected(),e}}printChunk(){return async e=>{if(null===this.characteristic)throw"device is null";await this.characteristic.writeValue(e)}}onDisconnected(){this.device=null,this.server=null,this.service=null,this.characteristic=null}}const f={name:"Generic Bluetooth Receipt Printer",createWebDevice:()=>new w({services:["00001101-0000-1000-8000-00805F9B34FB"],characteristic:"00001101-0000-1000-8000-00805F9B34FB",buffersize:20})};var b=n(3),y=n.n(b),E=n(4),m=n.n(E);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class _ extends r.Component{constructor(e){super(e),g(this,"usbwebprinter",void 0),g(this,"btwebprinter",void 0),this.state={text:'<?xml version="1.0" encoding="UTF-8"?>\n<output>\n  <ticket>\n  <line size="1">\n    <text>Lorem ipsum</text>\n  </line>\n  <line>\n    <text>dolor sit amet,</text>\n  </line>  \n  <line>\n    <text>consectetur adipiscing elit,</text>\n  </line>  \n  <line>\n    <text>do eiusmod </text>\n    <text bold="true">tempor incididunt</text>\n  </line>\n  <line>\n    <text>ut </text>\n    <text underline="true">labore et dolore</text>\n    <text> magna aliqua.</text>\n  </line> \n  </ticket>\n</output>'},this.usbwebprinter=new l(p),this.btwebprinter=new l(f)}async printText(e){try{e.connected()||await e.request(),await e.print(this.state.text),alert("Success.")}catch(e){alert("Cannot print："+e)}}async handleClickUSB(e){await this.printText(this.usbwebprinter)}async handleClickBT(e){await this.printText(this.btwebprinter)}updateText(e){this.setState({text:e.target.value})}render(){return i.a.createElement("div",null,i.a.createElement("a",{href:"https://github.com/adrianromeroopenbravo/webhardware"},i.a.createElement("img",{src:y.a,style:{position:"absolute",top:0,right:0},alt:"Fork me on GitHub"})),i.a.createElement("h1",{className:"title"},i.a.createElement("a",{href:"https://www.openbravo.com"},i.a.createElement("img",{src:m.a,style:{width:"4em"},alt:"Openbravo, S.L.U."}))," Web Hardware"),i.a.createElement("div",null,i.a.createElement("button",{className:"action",onClick:e=>this.handleClickUSB(e)},"PRINT (WebUSB)"),i.a.createElement("button",{className:"action",onClick:e=>this.handleClickBT(e)},"PRINT (WebBluetooth)")),i.a.createElement("div",null,i.a.createElement("textarea",{className:"document-editor",onChange:e=>this.updateText(e),rows:30,cols:40},this.state.text)))}}n(9);"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./service-worker.js").catch(e=>{console.warn("SW registration failed: ",e)})}),c.a.render(i.a.createElement(_,null),document.getElementById("root"))}]);
//# sourceMappingURL=bundle.js.map