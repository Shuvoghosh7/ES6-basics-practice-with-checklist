const arr1=[1,2,3,4]
const arr2=[5,6,7,8]
const arr3=[...arr1,...arr2]
// console.log(arr3);

// map
const friend =['rifat','joy','sanim']
const fName = name=>`Hello ${name}.How are you`
const mapse =friend.map(fName)
/* console.log(mapse) */
// find
const friendArray =['rifats','joys','sanims','joy']
const friendLoop = friend => friend.length%2 != 0
const finds = friendArray.find(friendLoop);
console.log(finds)
