import {product,nums} from './array/arrayProduct5.js'
import {maxProfit,pricesArray} from './array/maxProfit.js'
import {minLengthArray} from './array/leetcode8.js';
const numbers=[2,3,4,1,3,4,5,6,6,7,4,3];
const target=17;

console.log("minimum length Array",minLengthArray(target,numbers))

console.log("maxProfit",maxProfit(pricesArray));
console.log("product",product(nums));