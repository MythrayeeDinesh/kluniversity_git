let arr1 = [1,2,3,4,5];

//reduce to find sum of elements
let new_arr = arr1.map((element,index)=>
{
    return element*100;
}).filter((element,index)=>{
    return element>=300;
}).reduce((firstElement,nextElement)=>{
    return firstElement + nextElement
});

console.log(new_arr);

let arr2 = [10,20,30,40,50,60,70,80,90,100];

arr2.splice(4,3);
console.log(arr2);

arr2.splice(1,3,20,30);
console.log(arr2);

//if we dont wawnt to remove, only we are going to add, give '0'
//and add the values.
arr2.splice(3,0,40,50,60,70);
console.log(arr2);

let arr3 = [1,11,111,1111,2,22,222,2222,3,33,333,3333];
arr3.splice(4,2)
console.log(arr3);

//if we want to delete till last value,dont give comme value
arr3.splice(8);
console.log(arr3);

arr3.splice(-4);
console.log(arr3);

arr3.splice(-2,0,22,222,2222,3,33,333,3333)
console.log(arr3);


let arr5 = [30,45,12,54,75,25,78,98,55];

let index_val = arr5.findIndex((element,index)=>
{
    return element == 45;
})

console.log(index_val);

arr5.splice(index_val,1);
console.log(arr5);

arr5.splice(arr5.findIndex((element,index)=>
{
    return arr5 == 54;
}),1);
console.log(arr5);

