// 1、commonJs的方式导入
// const {sum, multiply} = require('./MathUtil');
// console.log(sum(1, 2));
// console.log(multiply(10, 20));

// 2、es6的方式导入
import {sum, multiply} from './js/MathUtil';

console.log(sum(1, 2));
console.log(multiply(10, 20));