// Given an integer array nums.return an array answer such that answer[i]is equal to thae product of all the elelments of nums  except nums[i]
export const nums=[1,2,3,4,5];
export function product(arr){
    let ans=[1];
    let postfix=1;
    let arrlength=arr.length;
   for(let i=1;i<arrlength;i++){
    ans[i]=ans[i-1]*arr[i-1];
   }
   for(let i=arrlength-2;i>=0;i--){
     postfix=postfix*arr[i+1]
       ans[i]=ans[i]*postfix;
   }
   return ans
}


