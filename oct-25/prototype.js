"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.susan = function (opinion) {
    return `susan ${opinion} '${this}'`;
};
console.log("Apple".susan('like'));
console.log("Ball".susan('dislike'));
