//call - it invokes a function by specifying its owner object, it takes argument separately

let obj1 = {
    name: 'john',
    subj: 122,
}

function sayHello(greet){
    return 'hello ' + this.name +" "+greet
}


console.log(sayHello.call(obj1,'good Morning'))

//apply- it invokes a function by specifying its owner object, it takes argument as an array

let obj2 = {
    name: 'jane',
    car: 'maruti'
}

let obj3 = {
    travelDetails: function(country){
        return this.name + ' has ' + this.car+' and is going for vacation in '+ country
    }
}

console.log(obj3.travelDetails.apply(obj2,['France']))

//bind - same as call but becomes a new function 
const greetDetails = sayHello.bind(obj1,'good afternoon')
console.log(greetDetails())

