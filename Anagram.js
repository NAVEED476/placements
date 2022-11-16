function anagram (str1,str2){
    let n1 = str1.trim().split("").sort();
    let n2 = str2.trim().split("").sort();
   if(n1.join("") === n2.join("")){
    console.log("anagram")
   }
   else{
    console.log("not anagram")
   }
}

anagram("naveed", "deevanww")