
exports.min = function min (array) {
    if (array === undefined || array.length === 0) return 0;
    return Math.min.apply(null, array);
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) return 0;
    return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) return 0;
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
  return total / array.length;
}
