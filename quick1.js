let arr = [1,5,6,93,100,574,7382,857623,2398928346]


function quicksort(arr){
    if(arr.length== 1){
        return arr
    }
    // in quick sort first we need to get the pivot value


    let pivot = arr[arr.length-1]
    let leftarr=[];
    let rightarr =[] ;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            leftarr.push(arr[i])
        }
        else{
            rightarr.push(arr[i])
        }
    }

    if(leftarr.length>0 && rightarr.length>0){
        return [...quicksort(leftarr), pivot, ...quicksort(rightarr)]
    }
    else if (leftarr.length>0){
        return [...quicksort(leftarr), pivot]
    }
    else{
        [pivot, ...quicksort(rightarr)]
    }
}

console.log(quicksort(arr))