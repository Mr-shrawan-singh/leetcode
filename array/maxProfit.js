/*you are given an array of prices where prices[i] is the  price of a
 given stock on an ith DynamicsCompressorNode. you want to maximise your 
profit by choosing  a single day  to buy one stock and choosing a 
different day in the future  to sell that stock return the maximum profit you 
can achive from this transaction.if cannot achieve any profit return 0*/
export const pricesArray=[7,1,5,3,6,4];
export function maxProfit(prices){
    let minPrice=Infinity;
    let maxProfit=0;
    let length=prices.length;

    for(let i=0;i<length;i++){
        if(minPrice>prices[i]){
            minPrice=prices[i];
        }else if(prices[i]-minPrice>maxProfit){
                maxProfit=prices[i]-minPrice; 
        }
    }
    return maxProfit;

}

