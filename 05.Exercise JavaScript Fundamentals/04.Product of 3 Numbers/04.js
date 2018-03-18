function productOf3Numbers(arr) {
    var x = Number(arr[0]);
    var y = Number(arr[1]);
    var z = Number(arr[2]);

    if(x==0 || y==0 || z==0) {
        console.log("Positive");
        return;
    }

    var negativeCounter = 0;
    if(x < 0) {
        negativeCounter++;
    }
    if(y < 0) {
        negativeCounter++;
    }
    if(z < 0) {
        negativeCounter++;
    }

    if(negativeCounter % 2 == 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}
(productOf3Numbers(4,3,4));