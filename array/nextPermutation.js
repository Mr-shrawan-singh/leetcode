/*the next permutation of an array of integers is the  next lexicographicly
greater permutation of its integer . Given an array of integers nums find the next permutation of nums.
the replacement must be in place and use only constant extra memory */


// Find the pivot index
// Traverse from the right until you find the first decreasing element nums[i] < nums[i+1].
// If no such index exists → the array is the largest permutation → reverse it.

// Find the successor
// From the right, find the first element greater than nums[i], call it nums[j].

// Swap pivot and successor
// Swap nums[i] and nums[j].

// Reverse the suffix
// Reverse the subarray from i+1 to the end (because it is in descending order, reversing makes it the smallest possible order).


const nums=[2,4,2,4,5,5,4];

function nextPermutation(nums) {
    let n = nums.length;
    let i = n - 2;

    // Step 1: find pivot
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = n - 1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    
    reverse(nums, i + 1, n - 1);

    return nums; 
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

nextPermutation(nums);
console.log(nums);