parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ir8I":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return a(t)||i(t)||n(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}function i(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function a(t){if(Array.isArray(t))return o(t)}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function l(t,e,r){return e&&s(t.prototype,e),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function f(e){var r=c(e,"string");return"symbol"==t(r)?r:String(r)}function c(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,r||"default");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}var h=function(){return l(function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];if(u(this,t),4!==e.length||!e.every(function(t){return 4===t.length}))throw new Error("Initial state is not valid!");this.initialState=e,this.restart()},[{key:"moveLeft",value:function(){var t=this;if("playing"===this.status){var e=this.state.map(function(e){return t.merge(e,0)});this.isStateDifferent(e.state)&&this.updateGame(e)}}},{key:"moveRight",value:function(){var t=this;if("playing"===this.status){var e=this.state.map(function(e){return t.merge(e,1)});this.isStateDifferent(e.state)&&this.updateGame(e)}}},{key:"moveUp",value:function(){var t=this;if("playing"===this.status){var e=this.rotateMatrix(this.state,1).map(function(e){return t.merge(e,1)}),r=this.rotateMatrix(e,3);this.isStateDifferent(r)&&this.updateGame(r)}}},{key:"moveDown",value:function(){var t=this;if("playing"===this.status){var e=this.rotateMatrix(this.state,1).map(function(e){return t.merge(e,0)}),r=this.rotateMatrix(e,3);this.isStateDifferent(r)&&this.updateGame(r)}}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.restart(),this.status="playing",this.putNewNumber(),this.putNewNumber()}},{key:"restart",value:function(){this.state=this.cloneState(this.initialState),this.score=0,this.status="idle",this.firstMoveMade=!1}},{key:"cloneState",value:function(t){for(var r=[],n=0;n<t.length;n++)r.push(e(t[n]));return console.log("test"),r}},{key:"isStateDifferent",value:function(t){for(var e=0;e<this.state.length;e++)for(var r=0;r<this.state[e].length;r++)if(this.state[e][r]!==t[e][r])return!0;return!1}},{key:"updateGame",value:function(t){var e=this;this.state=t.state,this.score+=t.score,this.firstMoveMade=!0,this.putNewNumber(),t.mergedCells.forEach(function(t){var r=t.row,n=t.column,i=document.querySelector(".field-cell--".concat(e.state[r][n],"[data-row='").concat(r,"'][data-column='").concat(n,"']"));i&&(i.classList.add("merge"),setTimeout(function(){i.classList.remove("merge")},600))}),this.isGameOver()?this.status="lose":this.isGameWon()&&(this.status="win")}},{key:"getFirstMoveMade",value:function(){return this.firstMoveMade}},{key:"getAvailableCell",value:function(){var t=[];return this.state.forEach(function(e,r){e.forEach(function(e,n){e||t.push({x:n,y:r})})}),t}},{key:"getRandomElement",value:function(t){return t[Math.floor(Math.random()*t.length)]}},{key:"generateNumber",value:function(){return 0===Math.floor(10*Math.random())?4:2}},{key:"putNewNumber",value:function(){var t=this.getAvailableCell(),e=this.getRandomElement(t);this.state[e.y][e.x]=this.generateNumber()}},{key:"isGameOver",value:function(){var t=this;if(0===this.getAvailableCell().length){return[{horizontal:!1,forward:!1},{horizontal:!0,forward:!0},{horizontal:!1,forward:!0},{horizontal:!0,forward:!1}].every(function(e){var r=e.horizontal,n=e.forward,i=t.moveTiles(r,n).state;return t.isStateDifferent(i)})}return!1}},{key:"isGameWon",value:function(){return this.state.flat().includes(2048)}},{key:"rotateMatrix",value:function(t,e){return e?t.map(function(e,r){return t.map(function(t){return t[r]}).reverse()}):t.map(function(e,r){return t.map(function(t){return t[t.length-1-r]})})}},{key:"merge",value:function(t,e){var r=this,n=(e?t.reverse():t).filter(function(t){return t}).reduce(function(t,e,n){return t[n-1]===e?(t[t.length-1]+=e,r.score+=t[t.length-1]):t.push(e),t},[]),i=n.length;return n.length=t.length,n.fill(0,i,n.length),e?n.reverse():n}}])}();module.exports=h;
},{}],"6KIz":[function(require,module,exports) {
"use strict";var e=require("../modules/Game.class"),t=new e;function n(e){document.querySelectorAll(".field-row").forEach(function(t,n){e[n].forEach(function(e,n){var r=t.children[n];r.className="field-cell field-cell--".concat(e),r.innerText=e>0?e:"",e>0&&(r.classList.add("merge"),setTimeout(function(){return r.classList.remove("merge")},600))})})}function r(e){document.querySelector(".game-score").innerText=e}function o(e){e?(a.className="button restart",a.innerText="Restart"):(a.className="button start",a.innerText="Start")}function c(e){document.querySelectorAll(".message").forEach(function(e){e.classList.add("hidden")});var t={idle:"message-start",win:"message-win",lose:"message-lose"}[e];t&&document.querySelector(".".concat(t)).classList.remove("hidden")}function s(){n(t.getState()),r(t.getScore()),o(t.getFirstMoveMade()),c(t.getStatus())}var a=document.querySelector(".button");a.addEventListener("click",function(){switch(a.innerText){case"Start":t.start();break;case"Restart":t.restart()}console.log("test"),s()}),document.addEventListener("keydown",function(e){var n={ArrowUp:function(){return t.moveUp()},ArrowRight:function(){return t.moveRight()},ArrowDown:function(){return t.moveDown()},ArrowLeft:function(){return t.moveLeft()}}[e.key];n&&(e.preventDefault(),n()),s()});
},{"../modules/Game.class":"Ir8I"}]},{},["6KIz"], null)
//# sourceMappingURL=main.b6d20d76.js.map