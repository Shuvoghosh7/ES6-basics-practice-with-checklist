const products = [
{name:'mobile',price:10000,color:'blue'},
{name:'TV',price:30000,color:'black'},
{name:'witch',price:2000,color:'white'},
{name:'head phone',price:1000,color:'red'},
]

const prices = product =>product.price > 5000
const result = products.find(prices)  
console.log(result)