//Call

let obj={num:2};

let multiply_stuff=function(a,b,c){
    return this.num*a*b*c;
	}
console.log(multiply_stuff.call(obj,3,3,4));

//Apply

let obj1={num1:4};
let add_n=function(a,b,c){
    return this.num1+a+b+c;
}
let arr=[1,2,3]
console.log(add_n.apply(obj1,arr));

//Bind
let obj2={num2:6};
let mult_n=function(a,b,c){
    return this.num2*a*b*c;
}
let bound=mult_n.bind(obj2);
console.log(bound(1,2,3));

//Create a new object called Student with age 20 ,
// write a function which prints the age of the student from the student object.

let Stu={Age:20};
let details=function(){
    return this.Age
};

let bound1=details.bind(Stu);
console.log(bound1())


//Function currying using bind and closure
// Using Bind
let multiply=function(x,y){
    console.log(x*y) ;
}

let multiplytwo=multiply.bind(this,2);
multiplytwo(2);

//Using Closure

let multiply1=function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiply_new=multiply1(2);
multiply_new(4);