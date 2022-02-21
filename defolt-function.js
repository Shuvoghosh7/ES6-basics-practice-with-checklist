function defoltValue(a,b,c=7){
    return a+b+c;
}
const output=defoltValue(2,3,10)
console.log(output);
//arraow function
const defoltValue2 = (x,y,z=7)=>x+y+z
const output2=defoltValue2(10,20)
console.log(output2);
