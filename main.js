function numberDoubler(num) {
while(num <= 100){
    num = num * 2
}
return num
}


function stringRepeater(str) {
let str1 = ''
while (str1.length<10){
    str1= str1+str
}
return str1
}


function makeDivisible(x, y) {
while (x%y !== 0){
    x = x + 1
}
return x

}


module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};