Hi Shailvi


const obj = {
  name: {
    b: {
      c: 10
    },
    d: 'abc'
  }
};

const get = (x, y, z) => {
	const keys = 
	if(x?.y !== undefined){
  	return x.y
  }else{
  	return z
  }

}

const val1 = get(obj, 'name.b.c', 0); // should return 10
const val2 = get(obj, 'a.b.e', 0); // should return default value 0

==========

console.log(1);

setTimeout(function () {
  console.log(2);
}, 0);

Promise.resolve()
  .then(function () {
    console.log(3);
  })
  .then(function () {
    console.log(4);
  });
  
  =============
  
  
const name = 'John'

const person1 = {
  name: 'David',
  sayHi() {
    console.log(this.name);
  }
};

const person2 = {
  name: 'Doe'
};

person1.sayHi();
person1.sayHi.call(person2)


export const useToggle(toggle){
const text = toggle
const setValue = (toggle) => text = !

	
 return [text, setvalue]
}
