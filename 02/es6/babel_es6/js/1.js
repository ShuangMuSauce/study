let a=12;
const b=5;

let arr=[{a,b},{b,a}];

arr.sort((json1,json2)=>json1.a=json2.a);
alert(arr[0].a);