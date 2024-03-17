const mergeSortedArray = (arr1:any, arr2:any)=>{
    if(arr1.length < 0 && arr2.length > 0){
        return arr2;
    }

    if(arr2.length < 0 && arr1.length > 0){
        return arr1;
    }

    if(arr1.length < 0 && arr2.length < 0){
        return undefined;
    }

    let arr1Index = 1;
    let arr2Index = 1;
    let arr1Value = arr1[0];
    let arr2Value = arr2[0];
    let itterationLength = arr1.length > arr2.length ? arr1.length : arr2.length
    let sortedArray:any = [];

    while(arr1Value || arr2Value){
        console.log(arr1Value, arr2Value)
        if(!arr2Value || arr1Value < arr2Value){
            sortedArray.push(arr1Value);
            arr1Value = arr1[arr1Index];
            arr1Index++;
        }else{
            sortedArray.push(arr2Value);
            arr2Value = arr2[arr2Index];
            arr2Index++;
        }
    }


    return sortedArray;
}


console.log(mergeSortedArray([0,3,4,31], [4,6,30]))


