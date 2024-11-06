declare global {
    interface String {
        susan(opinion: string): string
    }
}

String.prototype.susan = function (opinion: string) {
    return `susan ${opinion} '${this}'`
}

console.log("Apple".susan('like'));
console.log("Ball".susan('dislike'));


export { };