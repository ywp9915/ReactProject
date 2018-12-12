for(var i=0;i<5;i++){
setTimeout(()=>{
console.log(i);
},1000)
}
// 55555连续

for(var i=0;i<5;i++){
setTimeout(()=>{
console.log(Date.now(),i);
},1000*i)
}
// 5
// 5
// 5
// 5
// 5
// 每隔一秒
for(let i=0;i<5;i++){
setTimeout(()=>{
console.log(i);
},1000)
}
// 01234连续