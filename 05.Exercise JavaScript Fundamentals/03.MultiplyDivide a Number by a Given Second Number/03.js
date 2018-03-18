function multiplyOrDivideNumber(n,x) {
    if(x>=n){
        return x*n;
    }
    else{
        return n/x;
    }
}
console.log(multiplyOrDivideNumber(2,3));