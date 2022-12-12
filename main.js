const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"
const splat = originalDisorderFormat.split("|$|");
console.log(splat);
const joiner = splat.join("<div></div>");
console.log(`<div>${joiner}</div>`);