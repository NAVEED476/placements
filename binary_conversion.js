function binary(num){
    if(num>0){
        return binary(parseInt(num/2))+(num%2)
    }
    return ""
}

console.log(binary(10))