let _chunk = (arr,chunkSize) =>{
    let chunkedArray = [];
    let arraylength = arr.length
    for(let k=0; k<arraylength; k = k+chunkSize){

        if(arr.length -k == 1){
            let temp1 = [arr[arraylength-1]]
            chunkedArray.push(temp1)
        }

        else{
            let temp =[]
            for(let i = k; i<k+chunkSize ;i++){
                
                temp[i-k] = arr[i];
            }
           chunkedArray.push(temp)
        }
    }

    
    return chunkedArray
}

console.log(_chunk(['1','2','3','4','5','6','7'],2))