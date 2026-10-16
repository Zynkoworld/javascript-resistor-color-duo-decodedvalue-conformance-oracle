// resistor-color solution START
const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

const colorCode = (color) => COLORS.indexOf(color);
// resistor-color solution END

const decodedValue = ([tens, ones]) =>
  colorCode(tens) * 10 + colorCode(ones);

const __in = [["brown", "black"], ["blue", "grey"], ["yellow", "violet"], ["white", "red"], ["orange", "orange"], ["green", "brown", "orange"], ["black", "brown"]];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: decodedValue(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
