// given an integer array nums move all 0s to the end of  it while mantaining the relative order of the non -zero elements . Note that you must do this in place without making a copy of the array
const numsArray = [1, 3, 5, 0, 6, 0, 5, 0, 0, 5, 6];


const  moveZeros=(arr) =>{
   let insertPos = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[insertPos] = arr[i];
            insertPos++;
        }
    }

      while (insertPos < arr.length) {
        arr[insertPos] = 0;
        insertPos++;
    }

    console.log(arr);
}

// using swap
function moveZeroes(nums) {
    let left = 0;
    const length=nums.length;
for(let right=0;right<length;right++){
    if(nums[right] !==0){
        [nums[left],nums[right]]=[nums[right],nums[left]];
        left++
    }
}
}
moveZeros(numsArray);

