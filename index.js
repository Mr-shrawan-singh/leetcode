import {product,nums} from './array/arrayProduct5.js'
import {maxProfit,pricesArray} from './array/maxProfit.js'
import {minLengthArray} from './array/leetcode8.js';
import {mergeAndSortArrays} from './array/sorttwoarray.js'
import {reverseString,usingDefaultMethods} from './stringexesize/reversString.js'
const numbers=[2,3,4,1,3,4,5,6,6,7,4,3];
let nonAscendingSort1 = [ 2, 3, 8, 13 ];
const nonAscendingSort2= [ 1, 5,5, 6, 7, 9, 10, 15, 20 ];

const target=17;
let stringArray = ['j', 'a', 'y', 's', 'h', 'r', 'e', 'e', 'r', 'a', 'm', 's'];
console.log("reversed String Array without function",reverseString(stringArray));
console.log("reversed String Array with function",usingDefaultMethods(stringArray));
console.log("minimum length Array",minLengthArray(target,numbers))

console.log("maxProfit",maxProfit(pricesArray));
console.log("product",product(nums));
console.log("mergeAndSortArrays",mergeAndSortArrays(nonAscendingSort1,nonAscendingSort2));  