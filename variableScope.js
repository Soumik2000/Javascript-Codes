let variable = 10;
function test(){
    let variable = 20;
    console.log(variable);
}

console.log(variable); //outer variable
test(); //variable inside test gets printed
console.log(variable); // outer variable gets printed again
/* The value of outer variable is not change in this case as the variable inside test is available only inside test */