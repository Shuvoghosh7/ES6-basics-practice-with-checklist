// one parameter arrow 
const number= num => num / 5
const result=number(25);
/* console.log(`Result is :`+result); */

// two parameter arrow 

const multi =(num1,num2)=>(num1+2)*(num2+2)
const output =multi(5,5);
/* console.log(output); */
// three parameter arrow 
const multiNumber = (n1,n2,n3)=>n1*n2*n3
const result2=multiNumber(2,3,4);
/* console.log(result2); */

// multiline arraow function
const multiLine = (n1,n2)=>{
    const sum1=n1+2;
    const sum2=n2 + 2;
    const multi= sum1 * sum2;
    return multi;
}
const result3 = multiLine(7,6)
console.log(result3);

