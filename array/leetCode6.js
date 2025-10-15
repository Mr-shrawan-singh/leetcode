/* you are given an integer array height of length n the are  n vertical
lines drawn such that the two endpoints of the ith line are (i,0),and (i,height[i]).
find two line that togather with the x-ais form a container , such that the 
container contain the most water .Return the maximum amount of water a container can store */
const height = [1,8,6,2,5,4,8,3,7];

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const h = Math.min(height[left],height[right]);
    const width = right  - left;
    const area = h * width;
    maxWater = Math.max(maxWater, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

console.log(maxArea(height));  
