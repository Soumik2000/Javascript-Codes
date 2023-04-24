const arr = new Array(4,2,1,3,6);
const strArr= new Array("23", "16", "57", "111");


//sorting the integer array in ascending order;
arr.sort();
console.log(arr.toString());


//sorting the String array in ascending order
/* String are sorted in lexicographical order, hence an array of String numbers cannot be sorted using normal sort method */
strArr.sort(function(a,b){return a-b});
console.log(strArr.toString());

//sorting the String array in descending order
strArr.sort((a,b)=> b-a);
console.log("String array in descending order = " + strArr);