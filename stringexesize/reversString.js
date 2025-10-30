/*
write a function that reverses a string the input is given as an array of characcters s  . you must do this by modifying the input array in place with  O(1) extra memory*/


export function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  return s.join('');
 
}


export const usingDefaultMethods=(s)=>{
    return s.reverse().join('');
}