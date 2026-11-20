import { add } from './calc.mjs';

const actual = add(2, 3);
if (actual !== 5) {
  console.error(`::error file=calc.mjs,line=2,title=AssertionError::expected add(2, 3) === 5, got ${actual}`);
  console.error(`FAIL test.mjs > add(2, 3) returned ${actual} instead of 5`);
  process.exit(1);
}
console.log('PASS: add(2, 3) === 5');
