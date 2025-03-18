var generate = function(numRows) {
    let res = new Array(numRows)
    // let finalRes = [];

    for(let i = 0 ; i < numRows; i++){
        res[i] = new Array(i + 1); 
        for(let j = 0 ; j <= i; j++){
            if (j === 0 || i === j) {
                res[i][j] = 1;
            }else{
                res[i][j] = res[i-1][j-1] + res[i-1][j]
            }

        }

    }
    return res
};
