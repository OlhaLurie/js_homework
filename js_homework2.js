function pow (a,b) {
    let result =1;
    let degree =b;
    if (b<0){
        degree = -b;
    }
    for (let i=0; i<degree; i++){
        result = result*a; 
    }
    if (b<0){
        return 1/result;
    }
    return result;
}
console.log (pow (2,3));
console.log (pow (0,3));
console.log (pow (2,0));
console.log (pow (2,-3));