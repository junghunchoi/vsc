var maximumWealth = function(accounts) {
    
    
    //인덱스별로 값 구해서 
    
    let sum = 0;
    let max = 0;
    for(i = 0; i < accounts.length; i++){
        for (j = 0; j < accounts[i].length; j++){
            sum += accounts[i][j];
        }
        if(sum > max){
            max = sum;
        }
        sum = 0; 
    }
    return max;

    
};
//이하는 array function 문법 사용법

var maximumWealth = function(accounts) {
    const result = accounts.map((data)=>
       data.reduce((acc,curr)=>acc+curr));
    return Math.max(...result); //배열의 최대값을 가져오는 스프레드 연선자
};

//문법 저장 master