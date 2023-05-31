/* function computeClosestToZero(ts) {
    if((ts.length) == 0){
        return 0;
    }else{
        
    }
}

console.log(computeClosestToZero([])); */

/* function computeClosestToZero(ts) {
    if((ts.length) == 0){
        return 0;
    }else{
        let menor = 0;
        for (let i = 0; i < ts.length; i++) {
            for (let j = 0; j < ts.length;j ++){
                if(ts[i] < ts[j]){
                    menor = ts[i];
                }
            }
        }
        return menor;
    }
}

console.log(computeClosestToZero([1 ,-2, -8 ,4 ,5])); */

/* var foo = [];
foo.push(1);

foo.push(2);

console.log(foo.length); */
/* 
console.log("2" == 2); */

/* function a(i, j) {
    if(i == 1 || j == 1){
     return true;
    }else{
       if((i+j) == 1){
         return true;
       }else{
         return false;
       }
    }
   }

   console.log(a(2, 3)); */


   function factorial(n) {
    let total = n;
    if (n == 0) {
        return 1;
    }
    else {
        for(let i=1;i<n;i++){
            total *= i;
        }
        return total;
    }
}

console.log(factorial(4)); // 120