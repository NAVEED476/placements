function count_theLetter(str){
    let obj={}
    for(let i=0;i<str.length;i++){
        if(obj[str[i]]==undefined){
            obj[str[i]]=1
        }
        else{
            let prev = obj[str[i]]
            obj[str[i]]=prev+1
        }
    }
    console.log(obj)
}
count_theLetter("naveed")

let array = [1,100000,21,30,4]
console.log(array.sort((a,b) => {return a-b}))
let n = [1,4,3,5,6,2,3,0]
console.log(n.sort());