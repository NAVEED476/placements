
let arr = [1,5,6,93,100,574,7382,857623,2]

function quicksort(arr){

    if(arr.length==1){
        return arr
    }

    let pivot = arr[arr.length-1]
    let leftarr = [];
    let rightarr = [];

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
    else if(leftarr.length>0){
        return[...quicksort(leftarr),pivot]
    }
    else{
        [pivot,...quicksort(rightarr)]
    }
}

console.log(quicksort(arr))