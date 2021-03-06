exports.toCamelCase = str =>
  str.replace(/\s(.)/g, $1 => $1.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, $1 => $1.toLowerCase());

exports.toModelName = str =>
  str.replace(/\s(.)/g, $1 => $1.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, $1 => $1.toUpperCase());
