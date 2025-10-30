
export function mergeAndSortArrays(arr1, arr2) {
    let length1 = arr1.length;
    let length2 = arr2.length;
     let j=length1-1;
    let k=length2-1;
    const combinelength=length1+length2;
    let i=combinelength-1;
    arr2.length=combinelength;
   
     while(j >= 0 && k >= 0){
      if(arr1[j] > arr2[k]){
          arr2[i--]= arr1[j--]; }
          else{
          arr2[i--]=arr2[k--];
      }
     }
  while(j >=0){
  arr2[i--]=arr1[j--];
   }
     
  while(k >= 0){
  arr2[i--]=arr2[k--];
  }
    return arr2;
}
