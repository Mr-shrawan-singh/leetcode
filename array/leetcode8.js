/* Given an array positive integers nums and a positive integer target
return the minimal length of a subarray whose sum is greater then or equal to target
 if  there is no such subarra return 0 instead.*/
export function minLengthArray(tar,nums){
    let length=nums.length;
    let minLength=Infinity;
    let sum=0;
    let left=0;
    for(let right=0; right<length;right++){
        sum +=nums[right];
        while(sum >=tar){
            minLength=Math.min(minLength,right-left+1);
            sum-=nums[left]
            left++
        }
    }
    return minLength;
}
