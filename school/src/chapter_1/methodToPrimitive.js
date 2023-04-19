let primitiveNumber = 273;

Number.prototype.method = function () {
    return 'primitive Method';
};
console.log(primitiveNumber.method());
