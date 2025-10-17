/* Given an array nums with  n objects colored red
 ,white,or blue,sort them  in place so that objects 
 of the same color are adjacent 
with the colors in the order red white and blue.*/
// Dutch national flag algorithm

let nums=["white","red","red","blue","red","white","blue","white","blue"];
const length=nums.length;
let mid=0;
let low=0;
let high=length-1;
while(mid <= high){
  
    if(nums[mid]=="red"){
       [ nums[low],nums[mid]]=[nums[mid],nums[low]]
        low++;
        mid++
    }else if(nums[mid]=="white"){
        mid++
    }else{
        [ nums[high],nums[mid]]=[nums[mid],nums[high]]

        high--;
    }
}
console.log(nums);

