threeSumClosest(arr,target){
        let res = []
        for(let i = 0 ; i<arr.length-2 ; i++){
            for(let j=i+1 ; j< arr.length-1; j++){
                for(let k=j+1; k<arr.length; k++){
                    res.push(arr[i]+arr[j]+arr[k])
                }
            }
        }
        let ans = 0
        let minValue = Number.MAX_VALUE
        let output = 0
        for(let i = 0; i< res.length; i++){
            ans = Math.abs(res[i] - target) 
            if(ans < minValue){
             minValue = ans 
             output = res[i]
            }
        }
        
        return output
    }
