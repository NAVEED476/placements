let arr = [1,5,3,2,22,4,5,98,67,789,907,9999,00000,36287,56383,73892782398]
let arr1 = [1,4,5,6,2,3,9,0]

function merge_sort(arr){
    if(arr.length == 1){
        return arr
    }

    let middele_point = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,middele_point);
    let rightArr = arr.slice(middele_point);

    return merge(merge_sort(leftArr), merge_sort(rightArr))
}

function merge(leftArr,rightArr){
    let output =[]
    let leftindex = 0;
    let rightindex = 0;
    while(leftindex<leftArr.length && rightindex<rightArr.length){
        let leftel = leftArr[leftindex];
        let rightel = rightArr[rightindex];
        if(leftel<rightel){
            output.push(leftel);
            leftindex++;
        }
        else{
            output.push(rightel);
            rightindex++;
        }
    }
    return [...output,...leftArr.slice(leftindex), ...rightArr.slice(rightindex)]
}

console.log(merge_sort(arr))

console.log(merge_sort(arr1))