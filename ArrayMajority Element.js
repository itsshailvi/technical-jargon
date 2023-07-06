majorityElement(a, size)
    {
        a = a.sort((a,b) => a-b)
        let count = 1
            for(let i = 0; i< size-1 ; i++){
                if(a[i] !== a[i+1]) count = 1;
                else{
                    count++
                    if(count > size/2) return a[i]
                    
                }
            }
        return (a.length === 1)? a[0] : -1
    }
