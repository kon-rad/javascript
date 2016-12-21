'use strict';
// es6 feature: block-scoped "let"declaration
const sentences = [
  { subject: 'JavaScript', verb: 'is', object: 'great' },
  { subject: 'Skyscrapers', verb: 'are', object: 'large' }
];
// es6 feature: object destructureing
function say ({ subject, verb, object }) {
  // es6 feature: emplate strings
  console.log(`${subject} ${verb} ${object}`);
}
// es6 feature: for..of
for (let s of sentences) {
  say(s);
}
