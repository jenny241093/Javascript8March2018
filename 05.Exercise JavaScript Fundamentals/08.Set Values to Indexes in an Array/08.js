
let setIndex=['3','0-5','1-6','2-7'];
    function setValueToIndex(setIndex) {
    let arrLen = Number(setIndex[0]);

    let resultArr=[];
   for(let i=0;i<arrLen;i++){
       resultArr[i]=0;
   }
   for (let i=1;i<setIndex.length;i++){
       let temp=setIndex[i];
       let indVal=temp.split('-');
       let index=indVal[0];
       let value=indVal[1];
       resultArr[index]=value;
   }
   console.log(resultArr.join(' '));
}
setValueToIndex(setIndex);
