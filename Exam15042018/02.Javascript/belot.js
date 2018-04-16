let teddysPoints=14-(14*0.10);
let nikoletasPoints=37-(37*0.05);
let raddysPoints=130;
let ivosPoints=220;


let girlsPoints=teddysPoints+nikoletasPoints;
let boysPoints=raddysPoints+ivosPoints-((raddysPoints+ivosPoints)*0.166);
let array=[teddysPoints,nikoletasPoints,raddysPoints,ivosPoints];
let highestPoints= Math.max.apply(Math, array);;
let difference=Math.round(girlsPoints-boysPoints);
console.log(highestPoints)
if (girlsPoints>boysPoints)
{

    console.log("Highest points: "+highestPoints);
    console.log("GIRLS POWER");
    console.log("Difference between points: "+Math.abs(difference));
}
else if (girlsPoints<boysPoints) {

    console.log("Highest points: "+highestPoints);
    console.log("MANS POWER");
    console.log("Difference between points: "+Math.abs(difference));

}
else {

    console.log("Highest points: "+highestPoints);
    console.log("EQUAL POINTS");
    console.log("Difference between points: "+Math.abs(difference));

}




