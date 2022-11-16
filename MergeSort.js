let arr = [3,5,4,7,8,9,1,2,6]

// expected o/p is 1 2 3 4 5 7 8 9

// i am using merge sort to get 
// time complexity is nlogn

// i need one helper function to achieve this

function merge_sort(arr){
    
    if(arr.length==1){
        return arr
    }

    let middele_point  = Math.floor(arr.length/2);
    let leftArr = arr.slice(0, middele_point);
    let rightArr = arr.slice(middele_point);


    return merge(merge_sort(leftArr), merge_sort(rightArr))
}

function merge(leftArr, rightArr){
    let output = []
    let leftindex = 0;
    let rightindex = 0;

    while(leftindex<leftArr.length && rightindex<rightArr.length){
        let leftel = leftArr[leftindex]
        let rightel = rightArr[rightindex]

        if(leftel<rightel){
            output.push(leftel)
            leftindex++
        }
        else{
            output.push(rightel);
            rightindex++
        }
    }

    return [...output, ...leftArr.slice(leftindex), ...rightArr.slice(rightindex)]
}

console.log(merge_sort(arr))


