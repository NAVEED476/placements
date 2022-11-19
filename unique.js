let arr = [1,3,1,1,3,4,1,13]

function unique(arr){
    let obj={}
    for(let i=0;i<arr.length;i++){
        obj[arr[i]]="something"
    }
    console.log(Object.keys(obj))
}
console.log(unique(arr));


function uni(arr){
    let array = []
    for(let i=0;i<arr.length;i++){
        let count=0
        for(let j=0;j<array.length;j++){
            if(array[j]==arr[i]){
                count++
            }
        }
        if(count==0){
            array.push(arr[i])
        }
    }
    console.log(array)
}
uni(arr)


function find_unique(arr){
    let obj={}
    for(let i=0;i<arr.length;i++){
        obj[arr[i]]="something"
    }
    console.log(Object.keys(obj))
}
find_unique(arr)


function finds(arr){
    let uni=[]
   for(let i=0;i<arr.length;i++){
    let count = 0;
    for(let j=0;j<uni.length;j++){
        if(uni[j]==arr[i]){
            count++
        }
    }
    if(count==0){
        uni.push(arr[i])
    }
   } 

   console.log(uni.join(" "))
}
finds(arr)
