/*
중간에 맥스값 넣을려다 안되서 배열 최대값 찾는 내장함수를 찾아서 썻는데
내장 함수와 구글링 with mdn 을 잘 활용해야할 것 같음
*/
var kidsWithCandies = function(candies, extraCandies) {
    
    let result = [];
    
    for (i=0;i<candies.length;i++){
        let isMax = candies[i]+extraCandies;
        
        if(isMax>=Math.max.apply(null, candies)){
            result[i] = true;
        }else{
            result[i] = false;
        }
            
    }
    return result;
};
