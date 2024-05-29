
/*var res='';
function reverse(a){
    let n= a.length;
    for(var x=n-1;x>=0;x--){
        a[x]=a[n-(x+1)];
        res= res+a[x];
        //console.log("The reverse of the string is", +a[x]);
    }
    console.log("The reverse of the string " +a+ " is", res);
}
reverse("damon");*/


/*let a= [38,62,25,51,46];
function largeNum(){
    let n= a.length;
    let result=a[0];
    for(let i=0;i<n;i++){
        if(a[i]>result)
        result= a[i];
        
    }
    console.log("The largest number in the array is " +result);
}
largeNum();*/


/*let factor=1;
function factorial(a){
    
    for(let i=a;i>0;i--){
        factor= i*factor;

    }
    return factor;
}
factorial(10);
console.log("The factorial is", factor);*/

/*let factor=1;
const factorial=(a)=>{
    
    for(let i=a;i>0;i--){
        factor= i*factor;

    }
    return factor;
}
factorial(8);
console.log("The factorial is", factor);*/

/*function palindrome(a){
    n=a.length;
    let count;
    for(let i=0;i<(n)/2;i++){
        if(a[i]!=a[n-(i+1)])
        return 'It is not a palindrome';
        else
        return 'It is a palindrome';
    
    }

}
const value= console.log(palindrome("arshi"));*/


/*let num1 = 1;
let num =0;
let result;
function fibonacci(){
    for(let i=1;i<=10;i++){
        console.log(num);
        result= num+num1;
        num=num1;
        num1=result;
        //console.log(result);
    
    }
    
}
//console.log(num);
//console.log(num1);
fibonacci();*/

// let arr=[31,32,33,35,34];
// n= arr.length+1;
// let actsum= 0;
// let expesum=(n*(n+1))/2;
// //console.log(expesum);
// let missingNum;
// function missNum() {
//     for(let i=0;i<arr.length;i++){
//         actsum= actsum+arr[i];
//    }
//    console.log(actsum);
//     missingNum=expesum-actsum;
//    return missingNum;
// }
// missNum();
// console.log("The missing number is ", +missingNum);

// let arr=[31,32,33,36,34,35];
// let missNum;
// function findMissNum(){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i+1]-arr[i]>1)
//             missNum=arr[i] + 1;
//     }
//     return missNum;
    
// }
// findMissNum();
// console.log(missNum);

// function gcd(a, b) {
//     // Euclidean algorithm to find the GCD
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// function areCoprime(a, b) {
//     return gcd(a, b) === 1;
// }

// function findCoprimeCountForEachNumber(numbers) {
//     const coprimeCounts = {};

//     for (let i = 0; i < numbers.length; i++) {
//         const num = numbers[i];
//         let count = 0;

//         for (let j = 0; j < numbers.length; j++) {
//             if (i !== j && areCoprime(num, numbers[j])) {
//                 count++;
//             }
//         }

//         coprimeCounts[num] = count;
//     }

//     return coprimeCounts;
// }

// // Example usage:
// const numbers = [12, 15, 21, 28, 35];
// const coprimeCounts = findCoprimeCountForEachNumber(numbers);
// console.log("Coprime Counts:", coprimeCounts);

function gcd(a, b) {
    // Euclidean algorithm to find the GCD
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function areCoprime(a, b) {
    return gcd(a, b) === 1;
}

function countCoprimes(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        let count = 0;

        for (let j = 1; j <= array[i]; j++) {
            if (areCoprime(array[i], j)) {
                count++;
            }
        }

        result.push(count);
    }

    return result;
}

// Example usage:
const input = [5, 8, 14];
const output = countCoprimes(input);
console.log("Coprime Counts:", output);


// function countVehicleCombinations(wheels) {
//     const result = [];

//     for (let i = 0; i < wheels.length; i++) {
//         const wheelsCount = wheels[i];
//         let twoWheelCount = 0;
//         let fourWheelCount = 0;

//         // Calculate the number of 2-wheel vehicles
//         for (let j = 0; j <= wheelsCount; j += 2) {
//             if (j % 4 === 0) {
//                 twoWheelCount++;
//             }
//         }

//         // Calculate the number of 4-wheel vehicles
//         for (let k = 0; k <= wheelsCount; k += 4) {
            
//                 fourWheelCount++;
            
//         }

//         result.push(twoWheelCount+fourWheelCount);
//     }

//     return result;
// }

// // Example usage:
// const wheels = [4, 5, 2];
// const combinations = countVehicleCombinations(wheels);
// console.log("Vehicle Combinations:", combinations); // Output: [[2, 0], [0, 0], [1, 0]]

function countVehicleCombinations(wheels) {
    const result = [];

    for (let i = 0; i < wheels.length; i++) {
        const wheelsCount = wheels[i];
        let twoWheelCount = 0;
        let fourWheelCount = 0;

        // Calculate the number of 2-wheel vehicles
        for (let j = 0; j <= wheelsCount; j += 2) {
            if (j % 4 === 0) {
                twoWheelCount++;
            }
        }

        // Calculate the number of 4-wheel vehicles
        for (let k = 0; k <= wheelsCount; k += 4) {
            fourWheelCount++;
        }

        result.push(twoWheelCount + fourWheelCount);
    }

    return result;
}

// Example usage:
const wheels = [4, 5, 2];
const combinations = countVehicleCombinations(wheels);
console.log("Vehicle Combinations:", combinations); // Output: [2, 0, 1]

