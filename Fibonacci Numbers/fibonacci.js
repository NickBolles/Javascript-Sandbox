/**
 * Created by Nicholas on 3/1/2016.
 */

var fibNums = [0,1];
function findFib(num){
    console.log('FibNum for'+num);
    if (num<0){
        return 0;
    }
    var num1 = fibNums[num-1] || findFib(num-1);
    console.log('num1 '+num1);
    var num2 = fibNums[num-2] || findFib(num-2);
    console.log('num2 '+num2);
    var fibNum = num1+num2;
    fibNums[num] = fibNum;
    console.log('NumResult for ' +num + ' is ' + fibNum);
    return fibNum;
}
console.log(findFib(5));