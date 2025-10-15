const arrays=[24,5,34,54,5];
let arraylength=arrays.length;
for(let i=0;i<arraylength;i+=2){
    console.log(arrays[i]);
}

function getAlternets(arr){
    let res=[];
    for(let i=0;i<arraylength;i+=2){
        res.push(arr[i]);
}
return res;
}