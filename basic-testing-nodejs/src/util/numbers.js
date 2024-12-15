function transformToNumber(value) {
  if (!value) throw "No input provided!"
  if (typeof value !== "string") return NaN
  return +value;
}

exports.transformToNumber = transformToNumber;
